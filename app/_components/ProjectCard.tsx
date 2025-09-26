// TODO: Create Prop types for project, description, and image

// import Link from "next/link";

type ProjectCardProps = {
  project: string;
  description: string;
  image: string;
};

const ProjectCard = ({ project, description, image }: ProjectCardProps) => {
  return (
    <div>
      <h2>
        <a href="https://www.belkweb.dev" target="blank">
          {project}
        </a>
      </h2>
      <p>{description}</p>
      <img src={image} alt={project} />
    </div>
  );
};

export default ProjectCard;
