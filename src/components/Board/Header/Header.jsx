import styles from "./Header.module.css";

const Header = ({ wins, loses }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <strong>Камень vs Ножницы vs Бумага</strong>
      </div>
      <div className={styles.results}>
        <div className={styles.resItem}>
          Побед: <span>{wins}</span>
        </div>
        <div className={styles.resItem}>
          Поражений: <span>{loses}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
