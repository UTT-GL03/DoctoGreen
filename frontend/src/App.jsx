import { BrowserRouter, Route, Routes } from "react-router-dom";
import Praticiens from "./Praticiens";
import Praticien from "./Praticien";
import "./App.css";
import { Link, useSearchParams } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <nav className="navigation" aria-label="Navigation principale">
          <span className="navigation-label">Navigation</span>

          <div className="navigation-actions">
            <a role="button" href="/">
              Accueil
            </a>
            <a role="button" href="/connexion">
              Se connecter
            </a>
            <a role="button" href="/inscription">
              S'inscrire
            </a>
          </div>
        </nav>

        <header className="hero">
          <h1>DoctoGreen</h1>
        </header>

        <Routes>
          <Route path="/" element={<Praticiens />} />
          <Route path="/:id" element={<Praticien />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
