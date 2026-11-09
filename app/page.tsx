import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      {/* En-tête / Navigation */}
      <header className="header">
        <h1 className="logo">Académie Numérique</h1>
        <nav className="nav">
          <a href="#accueil">Accueil</a>
          <a href="#formations">Formations</a>
          <a href="#a-propos">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Section Héro / Accueil */}
      <section id="accueil" className="hero">
        <h2>Développez vos compétences numériques pour l'avenir</h2>
        <p>
          Découvrez nos formations pratiques en développement web, gestion des systèmes 
          et intelligence artificielle dispensées par des experts du domaine.
        </p>
        <a href="#formations" className="btn-primary">Voir nos formations</a>
      </section>

      {/* Section Formations */}
      <section id="formations" className="section">
        <h2>Nos Formations Phares</h2>
        <div className="cards-grid">
          <article className="card">
            <h3>Développement Web Modern</h3>
            <p>Maîtrisez React, Next.js et TypeScript pour construire des applications web performantes.</p>
          </article>
          <article className="card">
            <h3>Réseaux & Systèmes</h3>
            <p>Apprenez à concevoir, sécuriser et administrer des infrastructures réseau d'entreprise.</p>
          </article>
          <article className="card">
            <h3>Intelligence Artificielle</h3>
            <p>Initiez-vous au Machine Learning et à l'intégration des modèles d'IA dans vos projets.</p>
          </article>
        </div>
      </section>

      {/* Section À propos */}
      <section id="a-propos" className="section">
        <h2>À propos de l'Académie</h2>
        <p>
          L'Académie Numérique est un centre de formation engagé dans la préparation des étudiants 
          et professionnels aux exigences du marché de la technologie moderne.
        </p>
      </section>

      {/* Section Contact */}
      <section id="contact" className="section">
        <h2>Contactez-nous</h2>
        <p>Une question ? Un projet de formation ? N'hésitez pas à nous écrire.</p>
        <form className="contact-form">
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <textarea placeholder="Votre message" rows={4} required></textarea>
          <button type="submit" className="btn-primary">Envoyer</button>
        </form>
      </section>

      {/* Pied de page */}
      <footer className="footer">
        <p>&copy; 2026 Académie Numérique. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
