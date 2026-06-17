import Head from "next/head";
import Link from "next/link";
import { pages, siteUrl } from "../lib/siteData";

const page = pages.find((item) => item.path === "/contacto");

export default function Contacto() {
  return (
    <>
      <Head>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta property="og:title" content={page.ogTitle} />
        <meta property="og:description" content={page.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}${page.path}`} />
        <meta property="og:image" content={`${siteUrl}${page.image}`} />
      </Head>

      <main className="page-shell">
        <nav className="nav">
          <Link href="/">Inicio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <section className="content-section contact-layout">
          <div>
            <p className="eyebrow">Contacto</p>
            <h1>Agenda una visita al criadero</h1>
            <p className="lead">
              Atendemos consultas sobre toros reproductores, disponibilidad,
              visitas tecnicas y seleccion para nuevos proyectos ganaderos.
            </p>
          </div>

          <div className="contact-panel">
            <p>
              <strong>Ubicacion:</strong> Arequipa, Peru
            </p>
            <p>
              <strong>Telefono:</strong> +51 999 888 777
            </p>
            <p>
              <strong>Email:</strong> contacto@bravuraandina.pe
            </p>
            <p>
              <strong>Horario:</strong> Lunes a sabado, 8:00 a.m. - 5:00 p.m.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
