import styles from "./About.module.css";
import Link from "../UI/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <>
      <img
        className={styles.profilePic}
        src="https://mcusercontent.com/aeb4d659964a70376489c7833/images/6c372511-f08c-c153-7c7b-e124d112a09f.png"
        alt="profile picture"
      />
      <div className={styles.aboutContainer}>
        <h1 className={styles.name}>Will Lee</h1>
        <h3 className={styles.title}>Software Developer</h3>
        <a
          className={styles.website}
          href="https://funkymonkey.design"
          target="_blank"
        >
          funkymonkey.design
        </a>
        <div className={styles.controls}>
          <Link
            className={styles.emailButton}
            isEmail={true}
            email={"will@willlee.ca"}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Email
          </Link>
          <Link
            className={styles.linkedinButton}
            website="https://www.linkedin.com/in/will-i-lee/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
