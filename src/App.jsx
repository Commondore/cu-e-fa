import { useState } from "react";
import { GAME_PARAMS } from "@/data/data.js";
import { randomArrayItem } from "@/utils/random";
import Result from "@/components/Result/Result";
import Board from "@/components/Board/Board";

const App = () => {
  const [result, setResult] = useState("");
  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);

  const [wins, setWins] = useState(0);
  const [fails, setFails] = useState(0);

  const onUserChoice = (id) => {
    const comp = randomArrayItem(GAME_PARAMS);
    const user = GAME_PARAMS.find((item) => item.id === id);

    if (user.id === comp.loseId) {
      setWins((w) => w + 1);
      setResult("user");
    } else if (user.loseId === comp.id) {
      setFails((f) => f + 1);
      setResult("comp");
    } else {
      setResult("draw");
    }

    setUserChoice(user);
    setCompChoice(comp);
  };

  return result ? (
    <Result result={result} user={userChoice} comp={compChoice} again={() => setResult("")} />
  ) : (
    <Board choice={onUserChoice} wins={wins} loses={fails} />
  );
};

export default App;
