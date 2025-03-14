import { useState, useEffect } from "react";
import "./Contador.css";

const Contador = () => {
  const [diff, setDiff] = useState(null);
  const [initial, setInitial] = useState(null);

  const tick = () => {
    setDiff(new Date(+new Date() - initial));
  };
  const start = () => {
    setInitial(+new Date());
  };

  useEffect(() => {
    if (initial) {
      requestAnimationFrame(tick);
    }
  }, [initial]);

  useEffect(() => {
    if (diff) {
      requestAnimationFrame(tick);
    }
  }, [diff]);

  return (
    <div className="App">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="-38 0 100 23"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <h1 className="timer">{timeFormat(diff)}</h1>
      <button className="btnStart" onClick={start}>
        Start!!
      </button>
    </div>
  );
};

const timeFormat = (date) => {
  if (!date) return "00hr 00min 00s 00ms";

  let hh = date.getUTCHours();
  let mm = date.getUTCMinutes();
  let ss = date.getSeconds();
  let ms = date.getMilliseconds() / 10;

  hh = hh < 10 ? `0${hh}` : hh;
  mm = mm < 10 ? `0${mm}` : mm;
  ss = ss < 10 ? `0${ss}` : ss;

  return `${hh}hr ${mm}min ${ss}s`;
};

export default Contador;
