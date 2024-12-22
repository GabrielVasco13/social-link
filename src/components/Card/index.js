import { useContext } from "react";
import SocialLinks from "../SocialLinks";
import "./Card.css";
import { translations } from "../../translation/translation";
import LanguageSwitcher from "../LanguageSwitcher";
import { LanguageContext } from "../../LanguageContext";

const Card = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <main className="card">
      <LanguageSwitcher />
      <div className="card-profile">
        <img
          alt="Foto de perfil"
          src={`${process.env.PUBLIC_URL}/assets/images/profile-picture.png`}
        />
      </div>
      <section className="card-name">
        <h1>Gabriel Vasconcelos</h1>
      </section>
      <section className="card-location">
        <p>{t.location}</p>
      </section>
      <section className="card-information">
        <p>{t.description}</p>
      </section>
      <SocialLinks social="GitHub" link="https://github.com/GabrielVasco13" />
      <SocialLinks social="Discord" link="https://discord.gg/QGnsrcshbb" />
      <SocialLinks
        social="Linkedin"
        link="https://www.linkedin.com/in/gabrielvasco906/"
      />
      <SocialLinks
        social="Youtube"
        link="https://www.youtube.com/@SrPotato16g"
      />
      <SocialLinks social="Twitch" link="https://www.twitch.tv/srpotato16g" />
    </main>
  );
};

export default Card;
