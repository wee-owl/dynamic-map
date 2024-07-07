import { BaseSyntheticEvent, MouseEventHandler } from "react";
import circlesObject from "../../utils/circlesObject";
import { useNavigate } from "react-router-dom";
import style from "./CirclePage.module.css";


function CirclePage({id, top, left, group, onChange}: {
  id: string, 
  top: number, 
  left: number, 
  group: number, 
  onChange(value: boolean): void }) {

  const navigate = useNavigate();

  const handleClose: MouseEventHandler<HTMLButtonElement> = (e: BaseSyntheticEvent) => {
    if (typeof onChange !== "function") return;
    e.stopPropagation();
    onChange(true);
    navigate("/dynamic-map");
  };


  return (
    <div className={style.circle__page__wrapper}>

      <div className={style.circle__page__content}>
        <p>ID элемента:&nbsp;&nbsp;
          <span>{id}</span>
        </p>
        
        <p>Отступ сверху:&nbsp;&nbsp;
          <span>{top}</span>&nbsp;px
        </p>

        <p>Отступ слева:&nbsp;&nbsp;
          <span>{left}</span>&nbsp;px
        </p>

        <p>Группа:&nbsp;&nbsp;
          <span>{group + 1}</span>
        </p>
      </div>

      <button 
        className={style.circle__page__button}
        onClick={handleClose}
      >
        назад
      </button>

      <div 
        className={style.circle__item}
        style={{
          left: `${left}px`, 
          top: `${top}px`,
          borderColor: `${circlesObject[group].color}`,
        }}
      >
      </div>

    </div>
  );
}

export default CirclePage;