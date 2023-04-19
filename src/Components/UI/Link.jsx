import styles from "./Link.module.css";
const Link = ({ isEmail, email, website, children, className }) => {
  return (
    <a
      className={`${className} ${styles.button}`}
      href={isEmail ? `mailto:${email}` : website}
      target={website ? "_blank" : ""}
    >
      {children}
    </a>
  );
};

export default Link;
