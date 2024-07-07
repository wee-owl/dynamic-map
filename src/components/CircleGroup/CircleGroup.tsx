import { useEffect, useState } from "react";
import Circle from "../Circle/Circle";


function CircleGroup({ count, color, group, onChange }: {
  count: number, 
  color: string, 
  group: number, 
  onChange({id, top, left, group}: {
    id: string, 
    top: number, 
    left: number, 
    group: number}): void }) {

  const [state, setState] = useState([...Array(count)].map((_, i) => 
    <Circle color={color} group={group} onChange={onChange} key={i}/>));

  useEffect(() => {
    const id = setInterval(() => setState([...Array(count)].map((_, i) => 
      <Circle color={color} group={group} onChange={onChange} key={i}/>)), 10000);
    return () => clearInterval(id);
  }, [color, count, group, onChange]);


  return (
    <>
      {state}
    </>
  );
}

export default CircleGroup;