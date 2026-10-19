import authorphoto from "../../images/authorphoto.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="author">
      <div className="author__portrait">
        <img className="author__portrait-photo" src={authorphoto}></img>
      </div>
      <div className="author__about">
        <h2 className="author__about-title">Acerca del autor</h2>
        <p className="author__about-info">It's mee</p>
      </div>
    </div>
  );
}
