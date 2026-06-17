import Head from "next/head";
import Link from "next/link";
import { blogPosts, pages, siteUrl } from "../lib/siteData";

const page = pages.find((item) => item.path === "/blog");

export default function Blog() {
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

        <section className="content-section">
          <p className="eyebrow">Blog ganadero</p>
          <h1>Crianza, seleccion y manejo de toros en Arequipa</h1>
          <p className="lead">
            Articulos practicos para productores que buscan mejorar su hato con
            reproductores fuertes, sanos y bien adaptados al sur del Peru.
          </p>

          <div className="post-grid">
            {blogPosts.map((post) => (
              <article className="post-card" key={post.title}>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
