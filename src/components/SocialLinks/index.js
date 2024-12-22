import "./SocialLinks.css";

const SocialLinks = ({ social, link }) => {
  return (
    <>
      <a href={link} className="social-link" target="_blank" rel="noreferrer">
        {social}
      </a>
    </>
  );
};

export default SocialLinks;
