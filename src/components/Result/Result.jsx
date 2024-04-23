import { motion } from "framer-motion";
import cn from "clsx";

import styles from "./Result.module.css";

const Result = ({ result, user, comp, again }) => {
  return (
    <div
      className={cn(styles.result, {
        [styles.win]: result === "user",
        [styles.lose]: result === "comp",
        [styles.draw]: result === "draw",
      })}
    >
      <motion.div
        initial={{ x: -300, y: "-50%" }}
        animate={{ x: 0, y: "-50%" }}
        className={styles.user}
      >
        {result !== "draw" && (
          <h3 className={styles.title}>{result === "user" ? "Вы победили" : "Вы проиграли"}</h3>
        )}
        <img src={`img/${user.name}.png`} alt={user.name} />
      </motion.div>
      <motion.div
        initial={{ x: 300, y: "-50%" }}
        animate={{ x: 0, y: "-50%" }}
        className={styles.comp}
      >
        {result !== "draw" && (
          <h3 className={styles.title}>
            {result === "comp" ? "Компьютер победил" : "Компьютер проиграл"}
          </h3>
        )}

        <img src={`img/${comp.name}.png`} alt={comp.name} />
      </motion.div>

      {result === "draw" && (
        <motion.div
          initial={{ x: "-50%", y: -400, opacity: 0 }}
          animate={{ x: "-50%", y: "-50%", opacity: 1, transition: { delay: 0.5 } }}
          className={styles.drawMessage}
        >
          Ничья
        </motion.div>
      )}

      <button className={styles.btn} onClick={again}>
        Сыграем еще раз?
      </button>
    </div>
  );
};

export default Result;
