import "./projectcard.css";

/**
 * Card to show content
 *
 * @param {{title: string, imgUrl: string, description: string}} properties
 */

export function ProjectCard(properties) {
  const { title, imgUrl, description } = properties;

  return (
    <div className="card-body">
      <img className="card-img" src={imgUrl} alt="" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}
