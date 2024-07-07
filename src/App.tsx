import { useState } from "react";
import { v4  as  uuidv4 } from "uuid";
import { Route, Routes } from "react-router-dom";
import circlesObject from "./utils/circlesObject";
import Container from "./components/Container/Container";
import CirclePage from "./components/CirclePage/CirclePage";
import CircleGroup from "./components/CircleGroup/CircleGroup";
import "./App.css";


function App() {
  const [state, setState] = useState({id: "", top: 0, left: 0, group: 0});
  const [click, setClick] = useState(false);

  const handleClick = ({id, top, left, group}: {
    id: string, 
    top: number, 
    left: number, 
    group: number}): void => {

    setState(prevState => {
      return {
        ...prevState, 
        id: id,
        top: top,
        left: left,
        group: group,
      }
    });
    setClick(true);
  };

  const handleClose = () => {
    setClick(false);
  };


  return (
    <>
      <h1 className="title">Dynamic map</h1>
      <Container>
        <Routes>

          {!click && <Route path="/dynamic-map" element={
            circlesObject.map(({count, color}: 
              {count: number; color: string}, i: number) => {
              return <CircleGroup 
                count={count} 
                color={color} 
                group={i} 
                onChange={handleClick}
                key={uuidv4()}
              />
            })
          } />}

          {click && <Route path="/dynamic-map/id/*" element={
            <CirclePage 
              id={state.id} 
              top={state.top} 
              left={state.left} 
              group={state.group} 
              onChange={handleClose} 
            />
          } />}

        </Routes>
      </Container>
    </>
  );
}

export default App;