import SocialLinks from "../SocialLinks";
import "./Card.css";

const Card = () => {
  return (
    <main className="card">
      <div className="card-profile">
        <img alt="Foto de perfil" src="/assets/images/profile-picture.png" />
      </div>
      <section className="card-name">
        <h1>Gabriel Vasconcelos</h1>
      </section>
      <section className="card-location">
        <p>São Paulo, Brazil</p>
      </section>
      <section className="card-information">
        <p>"Mobile Developer and Profissional Procrastinator."</p>
      </section>
      <SocialLinks social="Discord" link="www.google.com" />
    </main>
  );
};

export default Card;
