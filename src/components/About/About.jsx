import authorphoto from "../../images/authorphoto.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="author">
      <div className="author__portrait">
        <img
          className="author__portrait-photo"
          src={authorphoto}
          alt="foto del autor"
        />
      </div>
      <div className="author__about">
        <h2 className="author__about-title">Acerca del autor</h2>
        <p className="author__about-info">
          Amante del camino de la consciencia, buscador de su mejor versión,
          explorador de las artes, Desarrollador Full Stack
        </p>
      </div>
    </div>
  );
}
