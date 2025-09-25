// import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./_components/ProjectCard";

export default function Home() {
  return (
    <div id="top" className="p-2 flex flex-col justify-start gap-2 mt-6 mb-3">
      {/* Hero Section */}
      <div className="mb-6">
        <p className="font-bold text-3xl">Hi, I'm Connor Belk.</p>
        <span className="mt-2">full-stack web developer</span>
        <p className="mt-3 font-bold">
          I create websites with care, not just code.
        </p>
      </div>

      {/* About Section */}
      <div className="mb-6">
        <h2 id="about" className="font-bold mb-5">
          About
        </h2>
        <article className="mb-3">
          I'm a self-taught full-stack web developer from the United States. I
          have over 5 years of experience in web development spanning from HTML,
          CSS, and JavaScript to React, Next.js exovling into Typescript, using
          Nodejs. I am passioate about creating user-friendly websites that are
          easy to use and navigate. I love to learn new technologies and
          techniques to improve my skills.
        </article>
        <article className="mb-3">
          In my free time, I enjoy playing video games, playing D&D with friends
          watching movies with my wife, and listening to music.
        </article>
      </div>

      {/* Experience Section */}
      <div className="mb-6">
        <h2 id="experience" className="font-bold mb-5">
          Experience
        </h2>
        <section className="mb-5">
          <article>Senior Developer at belkweb.dev</article>
          <p>2020 - Present</p>
        </section>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h2 id="skills" className="font-bold mb-4">
          Skills
        </h2>
        <article className="mb-3">
          <ul className="list-disc ml-4">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Nodejs</li>
            <li>TailwindCSS</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Git</li>
            <li>APIs</li>
          </ul>
        </article>
      </div>

      {/* Projects Section */}
      <div className="mb-6">
        <h2 id="projects" className="font-bold mb-4">
          Projects
        </h2>
        <div>
          <ProjectCard
            project="belkweb.dev"
            description="Personal Portfolio Website"
            image="#"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="mb-6"></div>

      <Link href={"#top"} className="animate-all duration-300 ease-in-out">
        <button>back to top</button>
      </Link>
    </div>
  );
}
