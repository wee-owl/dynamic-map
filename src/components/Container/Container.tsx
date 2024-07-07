import { PropsWithChildren } from "react";
import image from "../../assets/bg.jpg";
import style from "./Container.module.css";


function Container({ children }: PropsWithChildren) {
  const bgImage: object = {backgroundImage: `url(${image})`};

  return (
    <main className={style.container} style={bgImage}>
      {children}
    </main>
  );
}

export default Container;