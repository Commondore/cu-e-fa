import Header from "./Header/Header";
import styles from "./Board.module.css";
import Controls from "./Controls";

const Board = ({ choice, wins, loses }) => {
  return (
    <div className={styles.board}>
      <Header wins={wins} loses={loses} />
      <div className={styles.container}>
        <h2 className={styles.title}>Сделай выбор</h2>
        <Controls choice={choice} />
      </div>
    </div>
  );
};

export default Board;
