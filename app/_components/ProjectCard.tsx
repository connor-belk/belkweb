// TODO: Create Prop types for project, description, and image

import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  project: string;
  description: string;
  image: string;
  href: string;
};

const ProjectCard = ({
  project,
  description,
  image,
  href,
}: ProjectCardProps) => {
  return (
    <Link href={href} target="_blank">
      <div>
        <h2 className="font-bold text-2xl">{project}</h2>
        <p>{description}</p>
        <Image
          src={image}
          alt={project}
          width={800}
          height={450}
          className="w-full rounded-xl object-cover border-4 border-slate-500/50"
        />
      </div>
    </Link>
  );
};

export default ProjectCard;
