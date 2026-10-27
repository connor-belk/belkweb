import { NextResponse } from "next/server";
import { google } from "googleapis";
import { CONTACT_LIMITS, CONTACT_SUBJECTS } from "../../contact-fields";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !fullName.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Please fill out all fields before submitting" },
        { status: 400 },
      );
    }
    if (
      fullName.length > CONTACT_LIMITS.name ||
      email.length > CONTACT_LIMITS.email ||
      message.length > CONTACT_LIMITS.message ||
      !CONTACT_SUBJECTS.some((option) => option === subject)
    ) {
      return NextResponse.json({ error: "Invalid contact details." }, { status: 400 });
    }
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Contacts!A:E",
      valueInputOption: "RAW",
      requestBody: {
        values: [[new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "medium", timeStyle: "short" }), fullName, email, subject, message]],
      },
    });

    // The contact is already saved at this point; a checkbox failure must not
    // prompt the visitor to retry and create a duplicate submission.
    try {
      const updatedRange = result.data.updates?.updatedRange;
      const rowMatch = updatedRange?.match(/!\$?[A-Z]+\$?(\d+)(?::|$)/i);
      const row = rowMatch ? Number(rowMatch[1]) : 0;
      if (!row) throw new Error("Could not determine the appended row.");

      const spreadsheet = await sheets.spreadsheets.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        fields: "sheets.properties",
      });
      const sheetId = spreadsheet.data.sheets?.find(
        (sheet) => sheet.properties?.title === "Contacts",
      )?.properties?.sheetId;
      if (sheetId == null) throw new Error("Could not find the Contacts sheet.");

      const range = {
        sheetId,
        startRowIndex: row - 1,
        endRowIndex: row,
        startColumnIndex: 5,
        endColumnIndex: 6,
      };
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        requestBody: {
          requests: [
            {
              setDataValidation: {
                range,
                rule: { condition: { type: "BOOLEAN" }, strict: true },
              },
            },
            {
              updateCells: {
                range,
                rows: [{ values: [{ userEnteredValue: { boolValue: false } }] }],
                fields: "userEnteredValue",
              },
            },
          ],
        },
      });
    } catch (error) {
      console.error("Contact saved, but checkbox creation failed:", error);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failure:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 500 },
    );
  }
}
