import React, { useState } from "react";
import toggleStyle from "./css/Toggle.module.css";

function Toggle() {
  const [toggleOn, setToggleOn] = useState(false);
  const toggleTrueFalse = () => {
    if (toggleOn) {
      setToggleOn(false);
    } else {
      setToggleOn(true);
    }
  };
  return (
    <div className={toggleStyle.outer}>
      <h1 className={toggleStyle.title}>Toggle</h1>
      <div className={toggleStyle.toggleContainer} onClick={toggleTrueFalse}>
        <div
          className={` ${toggleStyle.toggle} ${
            toggleOn ? toggleStyle.togglecheck : ""
          }`}
        />
        <div
          className={`${
            toggleOn
              ? `${toggleStyle.toggleCircle} ${toggleStyle.togglecheck}`
              : `${toggleStyle.toggleCircle}`
          }`}
        />
      </div>
      <div>{toggleOn ? "Toggle Switch ON :)" : "Toggle Switch OFF :("}</div>
    </div>
  );
}
export default Toggle;
