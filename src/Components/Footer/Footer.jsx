import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        className={styles.icon}
        href="https://twitter.com/WillLeeiAm"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} size="lg" />
      </a>
      <a
        className={styles.icon}
        href="https://www.linkedin.com/in/will-i-lee/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
      <a
        className={styles.icon}
        href="https://github.com/WilleeRobot"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </div>
  );
};

export default Footer;
