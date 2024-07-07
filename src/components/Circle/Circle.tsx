import { v4  as  uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { BaseSyntheticEvent, MouseEventHandler } from "react";
import { getRandomPosition } from "../../utils/getRandomPosition";
import style from "./Circle.module.css";


function Circle({ color, group, onChange }: { 
  color: string, 
  group: number, 
  onChange({id, top, left, group}: {
    id: string, top: number, left: number, group: number
  }): void }) {

  const navigate = useNavigate();

  const handleClick: MouseEventHandler<HTMLDivElement> = (e: BaseSyntheticEvent) => {
    if (typeof onChange !== "function") return;
    e.stopPropagation();

    const parent = e.target.parentNode.getBoundingClientRect();
    const element = e.target.getBoundingClientRect();
    const x = Math.round(element.left - parent.left);
    const y = Math.round(element.top - parent.top);

    const obj = {
      id: e.target.id,
      top: y,
      left: x,
      group: group,
    };

    onChange(obj);
    navigate(`/dynamic-map/id/${e.target.id}`);
  };


  return (
    <div 
      className={style.circle__item}
      id={uuidv4()}
      style={{
        left: `${getRandomPosition(1, 95)}%`, 
        top: `${getRandomPosition(1, 95)}%`,
        backgroundColor: `${color}`,
      }}
      onClick={handleClick}
    >
    </div>
  );
}

export default Circle;