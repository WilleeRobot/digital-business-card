import styles from "./Interests.module.css";

const Interests = () => {
  const blurb1 =
    "I am a frontend react developer with a particular interest in making things simple and automating daily tasks. I am always looking for new things to learn. I'm a CPA & tax specialist in a previous career";

  const blurb2 =
    "A musician. Oilers fanatic. Proud dad of 2 monkeys. Entrepreneur. Coffee fanatic. People connector.";

  return (
    <div className={styles.interestsContainer}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.blurb}>{blurb1}</p>
      <h2 className={styles.heading}>Interests</h2>
      <p className={styles.blurb}>{blurb2}</p>
    </div>
  );
};

export default Interests;
