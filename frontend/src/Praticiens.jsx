import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Praticiens() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const [praticiens, setPraticiens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5984/doctogreen/_all_docs?include_docs=true")
      .then((res) => res.json())
      .then((data) => {
        const docs = (data.rows ?? [])
          .map((row) => row.doc)
          .filter((doc) => doc && !doc._id.startsWith("_design/"));
        setPraticiens(docs);
      })
      .catch((err) => console.error("Erreur CouchDB :", err));
  }, []);

  const praticiensFiltres = useMemo(() => {
    const recherche = search.trim().toLowerCase();

    return praticiens.filter((praticien) =>
      `${praticien.name} ${praticien.type} ${praticien.description}`
        .toLowerCase()
        .includes(recherche),
    );
  }, [praticiens, search]);

  return (
    <main>
      <section className="search-section" aria-labelledby="search-title">
        <input
          id="doctor-search"
          type="search"
          value={search}
          onChange={(event) => {
            const value = event.target.value;
            setSearchParams(value ? { search: value } : {});
          }}
          placeholder="Rechercher un praticien"
        />
      </section>

      <section className="doctors-section" aria-labelledby="doctors-title">
        <h2 id="doctors-title">Liste praticien proche</h2>

        <div className="doctor-list">
          {praticiensFiltres.map((praticien) => (
            <Praticien  id={praticien._id} {...praticien} key={praticien._id} />
          ))}

          {praticiensFiltres.length === 0 && (
            <p className="empty-state">Aucun praticien trouvé.</p>
          )}
        </div>
      </section>
    </main>
  );
}

function Praticien({ id, name, type, description, creneaux = [] }) {
  return (
    <article className="doctor-card">
      <header>
        <span className="doctor-label">{type}</span>
        <h3>
          <Link to={`/${id}`}>{name}</Link>
        </h3>
      </header>

      <p className="doctor-address">{description}</p>
    </article>
  );
}

export default Praticiens;
