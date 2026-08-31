import Link from "next/link";

export default function ReferencesPage() {
  return (
    <main className="subpage references-page">
      <header className="subpage-header section-shell">
        <Link className="classic-mark" href="/" aria-label="Return home"><span>Y</span><span>R</span></Link>
        <nav><Link href="/">Home</Link><Link href="/projects">Projects</Link><Link href="/references">References</Link></nav>
        <a className="header-contact" href="mailto:ysriyar30@gmail.com">Contact</a>
      </header>
      <section className="references-intro section-shell">
        <p className="section-index">Professional references</p>
        <h1>People who can speak to how I work.</h1>
        <p>I am confirming permission and current contact details before publishing individual references. In the meantime, references are available directly upon request.</p>
        <a className="primary-button" href="mailto:ysriyar30@gmail.com?subject=Professional%20reference%20request">Request references</a>
      </section>
      <section className="reference-standard section-shell">
        <p className="section-index">What will appear here</p>
        <div className="reference-grid">
          <article><span>01</span><h2>Working relationship</h2><p>Clear context on how we worked together and what they directly observed.</p></article>
          <article><span>02</span><h2>Relevant perspective</h2><p>Specific insight into leadership, analytical ability, execution, or reliability.</p></article>
          <article><span>03</span><h2>Verified contact</h2><p>Only current information shared with the person&apos;s explicit permission.</p></article>
        </div>
      </section>
      <footer className="subpage-footer section-shell"><span>© 2026 Yuvraj Riyar</span><Link href="/">Return home</Link></footer>
    </main>
  );
}
