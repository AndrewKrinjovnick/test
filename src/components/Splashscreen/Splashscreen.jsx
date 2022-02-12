import React, { useEffect } from "react";
import MyPortal from "../MyPortal";
import style from "./Splashscreen.module.scss";

const Splashscreen = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      document.body.style.overflow = "unset";
    }, 6000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <MyPortal>
      <div className={`${style.screen} ${style.active}`}>
        <h2 className={style.header}>Андрей</h2>
      </div>
    </MyPortal>
  );
};

export default Splashscreen;
