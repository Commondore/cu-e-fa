import Control from "./Control";
import styles from "./Controls.module.css";
import { GAME_PARAMS } from "@/data/data.js";

const Controls = ({ choice }) => {
  return (
    <div className={styles.controls}>
      {GAME_PARAMS.map((item) => (
        <Control
          key={item.id}
          image={`img/${item.name}.png`}
          name={item.alias}
          choice={() => choice(item.id)}
        />
      ))}
    </div>
  );
};

export default Controls;
