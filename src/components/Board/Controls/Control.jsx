import styles from "./Controls.module.css";

const Control = ({ image, name, choice }) => {
  return (
    <button onClick={choice} className={styles.control}>
      <img className={styles.icon} src={image} alt={name} />
      <p className={styles.name}>{name}</p>
    </button>
  );
};

export default Control;
