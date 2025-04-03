import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  let palabra;
  let hora = 4;
  if (5 > hora) {
    palabra = "es muy temprano";
  } else {
    palabra = "es muy tarde";
  }
  return (
    <section>
      <div className="contenido">
      <Header/>
        <img
          src="./illustration-article.svg"
          alt=""
          className="illustration-article"
        />
        <h1 className="recuadro">Learning</h1>
        <h2 className="publicado">Published 21 Dec 2023</h2>
        <h3 className="html_css">HTML & CSS foundations</h3>
        <h4 className="informacion">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </h4>
        <div className="icono">
          <img src="./image-avatar.webp" alt="" className="image-avatar" />
          <h5 className="nombre">Greg Hooper</h5>
        </div>
      </div>
    </section>
  );
}
