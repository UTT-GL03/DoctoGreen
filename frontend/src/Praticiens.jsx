import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import data from "./assets/praticien_data.json";

function Praticiens() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") ?? "";

  const praticiens = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return data.praticiens;
    }

    return data.praticiens.filter((praticien) =>
      [praticien.name, praticien.type, praticien.description]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

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
          {praticiens.map((praticien) => (
            <Praticien {...praticien} key={praticien.id} />
          ))}

          {praticiens.length === 0 && (
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
        <span className="doctor-label">Praticien</span>
        <h3>
          <Link to={`/${id}`}>{name}</Link>
        </h3>
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

export default Praticiens;
