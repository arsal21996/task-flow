// Module: About page.
// Explains the project's purpose and architecture for someone studying the codebase.
import { CheckCircle2, Code2, Database, Layers3 } from 'lucide-react';

export default function About() {
  return (
    <section className="page-section container about-page">
      <div className="page-heading narrow"><div><span className="eyebrow">About TaskFlow</span><h1>Simple by design.</h1><p>TaskFlow is a learning-friendly full-stack CRUD application built to keep the code understandable without sacrificing a polished interface.</p></div></div>
      <div className="about-grid"><Info icon={<Layers3 />} title="Frontend" text="React, Vite, React Router, and reusable components provide the responsive user interface." /><Info icon={<Code2 />} title="Backend" text="Express exposes a small REST API with clear route, controller, and repository boundaries." /><Info icon={<Database />} title="Database" text="SQLite stores tasks locally so your changes remain available after restarting the API." /><Info icon={<CheckCircle2 />} title="Learning first" text="Source files include module comments and the README documents how each layer connects." /></div>
    </section>
  );
}
function Info({ icon, title, text }) { return <article className="info-card"><div className="info-icon">{icon}</div><h2>{title}</h2><p>{text}</p></article>; }
