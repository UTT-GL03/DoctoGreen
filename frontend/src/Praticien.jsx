import { useParams } from "react-router-dom";
import data from "./assets/praticien_data.json";
import { Link, useSearchParams } from "react-router-dom";

function Praticien() {
  const { id } = useParams();
  const praticien = data.praticiens.find((item) => item.id === id);

  const { name, type, description, creneaux = [] } = praticien;

  return (
    <main>
      <h1>{name}</h1>
      <p>{type}</p>
      <p>{description}</p>

      <h2>Créneaux disponibles</h2>
      <ul>
        {creneaux.map((creneau, index) => (
          <li key={`${creneau.date}-${creneau.heure}-${index}`}>
            {creneau.date} à {creneau.heure}
          </li>
        ))}
      </ul>

      <Link to="/">Retour à l'annuaire</Link>
    </main>
  );
}

export default Praticien;
