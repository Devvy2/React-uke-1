import "./funfact.css";

/**
 *
 *
 * @param {{ title: string, facts: string[] }} properties
 */
export function FunFact(properties) {
  const { title, facts } = properties;

  return (
    <div className="list-body">
      <h2 className="list-title">{title}</h2>
      <ul>
        {facts.map((fact, index) => (
          <li key={index} className="list-fact">
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
