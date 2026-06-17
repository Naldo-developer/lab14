import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { pages, siteUrl } from "../lib/siteData";

const page = pages.find((item) => item.path === "/");

export default function Home() {
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

        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Criadero en Arequipa</p>
            <h1>Toros reproductores de linea fuerte y manejo responsable</h1>
            <p className="lead">
              Bravura Andina selecciona toros sanos, equilibrados y adaptados al
              clima del sur peruano para productores que buscan mejorar su hato.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/contacto">
                Solicitar informacion
              </Link>
              <Link className="button secondary" href="/blog">
                Ver blog ganadero
              </Link>
            </div>
          </div>

          <div className="hero-image">
            <Image
              src="/images/criadero-arequipa.png"
              fill
              alt="Toros reproductores en un criadero de Arequipa"
              priority
              sizes="(max-width: 820px) 100vw, 52vw"
            />
          </div>
        </section>
      </main>
    </>
  );
}
