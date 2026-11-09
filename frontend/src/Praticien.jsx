import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "./App.css";
import { useState, useEffect } from "react";

dayjs.locale("fr");

function formatCreneau(date, heure) {
  const formattedDate = dayjs(date).format("DD/MM/YYYY");
  const capitalizedDate =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return `${capitalizedDate} à ${heure}`;
}

const crenauxTemplate = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

function Praticien() {
  const { id } = useParams();
  const [decalage, setDecalage] = useState(0);
  const [praticien, setPraticien] = useState({});

  useEffect(() => {
    fetch("/praticien_data.json")
      .then((x) => x.json())
      .then((data) => {
        setPraticien(data.praticiens.find((item) => item.id === id));
      });
  }, [id]);

  const { name, type, description, creneaux = [] } = praticien;

  const dates = [];
  for (let i = 0; i < 5; i++) {
    dates.push(
      dayjs()
        .add(decalage + i, "day")
        .format("YYYY-MM-DD"),
    );
  }

  function estPris(date, heure) {
    return creneaux.some((c) => c.date === date && c.heure === heure);
  }

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

      <section>
        <h2>Prendre rendez-vous</h2>

        <div className="timeslot-nav">
          <button
            type="button"
            onClick={() => setDecalage(decalage - 5)}
            disabled={decalage === 0}
          >
            Précédent
          </button>
          <button type="button" onClick={() => setDecalage(decalage + 5)}>
            Suivant
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Heure</th>
              {dates.map((date) => (
                <th key={date}>{dayjs(date).format("ddd DD/MM/YY")}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {crenauxTemplate.map((heure) => (
              <tr key={heure}>
                <td>{heure}</td>
                {dates.map((date) => (
                  <td key={date}>
                    <button
                      type="button"
                      className={estPris(date, heure) ? "timeslot-pris" : ""}
                      disabled={estPris(date, heure)}
                      title={formatCreneau(date, heure)}
                    >
                      {estPris(date, heure) ? "Pris" : "Libre"}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <Link to="/">Retour à l'annuaire</Link>
    </main>
  );
}

export default Praticien;
