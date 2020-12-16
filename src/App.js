import "./App.css";
import { useState } from "react";

function App() {
  const [point, setPoint] = useState("");
  const [newPoint, setNewPoint] = useState([]);
  const [totalBox, setTotalBox] = useState(0);
  const [colorBox, setColorBox] = useState(0);
  const [params3, setParams3] = useState('');
  let countColor = colorBox
  let rowsBox = []

  function makeBox() {
    setNewPoint(point.split(","));
    setTotalBox(Number(newPoint[0]));
    setColorBox(Number(newPoint[1]));
    setParams3(newPoint[2])
  }

  if (params3 === 'true') {
    for(let i = 1; i < totalBox+1; i++) {
      if (countColor > 0) {
        rowsBox.push(<div className="box"></div>)
        countColor -= 1
      } else {
        rowsBox.push(<div className="boxEmpty"></div>)
      }
    }
  } else {
    for(let i = 1; i < totalBox+1; i++) {
      if( i % 2 === 0) {
        rowsBox.push(<div className="boxEmpty"></div>)
      } else {
        if (countColor > 0) {
          rowsBox.push(<div className="box"></div>)
          countColor -= 1
        } else {
          rowsBox.push(<div className="boxEmpty"></div>)
        }
      }
    }
  }

  return (
    <div className="App">
      <input
        type="text"
        value={point}
        onChange={(e) => setPoint(e.target.value)}
      />
      <button onClick={(e) => makeBox(e)}>Generate Box</button>
      <br />
      <br />
      <br />
      <div className="bigBox">{rowsBox}</div>
      <div> {countColor} </div>
    </div>
  );
}

export default App;
