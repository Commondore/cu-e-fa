import styles from "./Result.module.css";
import cn from "clsx";

const Result = ({ result, user, comp, again }) => {
  return (
    <div
      className={cn(styles.result, {
        [styles.win]: result === "user",
        [styles.lose]: result === "comp",
        [styles.draw]: result === "draw",
      })}
    >
      <div className={styles.user}>
        {result !== "draw" && (
          <h3 className={styles.title}>{result === "user" ? "Вы победили" : "Вы проиграли"}</h3>
        )}
        <img src={`img/${user.name}.png`} alt={user.name} />
      </div>
      <div className={styles.comp}>
        {result !== "draw" && (
          <h3 className={styles.title}>
            {result === "comp" ? "Компьютер победил" : "Компьютер проиграл"}
          </h3>
        )}

        <img src={`img/${comp.name}.png`} alt={comp.name} />
      </div>

      {result === "draw" && <div className={styles.drawMessage}>Ничья</div>}

      <button className={styles.btn} onClick={again}>
        Сыграем еще раз?
      </button>
    </div>
  );
};

export default Result;
