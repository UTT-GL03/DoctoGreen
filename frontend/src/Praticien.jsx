import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import data from "./assets/praticien_data.json";
import "./App.css";

dayjs.locale("fr");

function formatCreneau(date, heure) {
  const formattedDate = dayjs(date).format("DD/MM/YYYY");
  const capitalizedDate =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return `${capitalizedDate} à ${heure}`;
}

function Praticien() {
  const { id } = useParams();
  const praticien = data.praticiens.find((item) => item.id === id);

  if (!praticien) {
    return (
      <main>
        <h1>Praticien introuvable</h1>
        <Link to="/">Retour à l'annuaire</Link>
      </main>
    );
  }

  const { name, type, description, creneaux = [] } = praticien;

  return (
    <main>
      <h1>Page d'information d'un praticien</h1>

      <article>
        <div className="grid">
          <section>
            <h2>Image</h2>

            <figure>
              <img
                src="https://placehold.co/300x300"
                alt={`Portrait de ${name}`}
              />
            </figure>
          </section>

          <section>
            <h2>Informations du praticien</h2>

            <article>
              <h3>{name}</h3>
              <p>
                <strong>Type :</strong> {type}
              </p>
              <p>{description}</p>
            </article>
          </section>
        </div>
      </article>

      <div className="grid timeslot-grid">
        {creneaux.map((creneau, index) => (
          <button
            className="timeslot"
            type="button"
            key={`${creneau.date}-${creneau.heure}-${index}`}
          >
            <span>{dayjs(creneau.date).format("DD/MM/YYYY")}</span>
            <span>à {creneau.heure}</span>
          </button>
        ))}
      </div>

      <Link to="/">Retour à l'annuaire</Link>
    </main>
  );
}

export default Praticien;
