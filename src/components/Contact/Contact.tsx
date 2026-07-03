export default function Contact() {
  return (
    <section className="section-container section-block" id="contacto">
      <h2 className="section-title">Contacto</h2>

      <div className="contact-grid">
        <a href="https://www.linkedin.com/" className="contact-link">
          LinkedIn
        </a>

        <a href="https://github.com/" className="contact-link">
          GitHub
        </a>

        <a href="mailto:omar@example.com" className="contact-link">
          Correo
        </a>

        <a href="#inicio" className="contact-link contact-link-primary">
          Descargar CV
        </a>
      </div>
    </section>
  );
}
