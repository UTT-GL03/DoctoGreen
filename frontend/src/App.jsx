import { useMemo, useState } from "react";
import data from "./assets/praticien_data.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const praticiens = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return data.praticiens;
    }

    return data.praticiens.filter((pra) =>
      [praticien.name, praticien.type, praticien.description]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  return (
    <div className="page">
      <nav className="navigation" aria-label="Navigation principale">
        <span className="navigation-label">Navigation</span>
        <div className="navigation-actions">
          <button type="button">Accueil</button>
          <button type="button">Se connecter</button>
          <button type="button">S'inscrire</button>
        </div>
      </nav>

      <header className="hero">
        <h1>DoctoGreen</h1>
      </header>

      <main>
        <section className="search-section" aria-labelledby="search-title">
          <label id="search-title" htmlFor="doctor-search">
            Barre de recherche
          </label>
          <input
            id="doctor-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Rechercher un praticien"
          />
        </section>

        <section className="doctors-section" aria-labelledby="doctors-title">
          <h2 id="doctors-title">Liste praticien proche</h2>
          <div className="doctor-list">
            {praticiens.map((praticien, index) => (
              <Headline {...praticien} key={`${praticien.name}-${index}`} />
            ))}
            {praticiens.length === 0 && (
              <p className="empty-state">Aucun praticien trouvé.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

function Headline({ name, type, description, creneaux = [] }) {
  return (
    <article className="doctor-card">
      <header>
        <span className="doctor-label">Praticien</span>
        <h3>{name}</h3>
      </header>
      <p className="doctor-type">{type}</p>
      <p className="doctor-address">{description}</p>
      {creneaux.length > 0 && (
        <ul className="appointment-list">
          {creneaux.map((slot, index) => (
            <li key={`${slot.date}-${index}`}>
              {slot.date} à {slot.heure} : {slot.patientName}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default App;
