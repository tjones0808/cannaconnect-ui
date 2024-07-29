import { useEffect, useRef } from "react";

const ProgressBar = ({ timeWatched, timeTotal }) => {
  const progressPercentage = (timeWatched / timeTotal) * 100;
  const myRef = useRef();

  useEffect(() => {
    if (myRef.current) {
      myRef.current.style.setProperty(
        "--progress-bar-filled",
        `${progressPercentage}%`,
      );
    }
  });

  return <div ref={myRef} className="host" />;
};

export default ProgressBar;
