import logo from "./logo.svg";
import "./App.css";
import { ReactDiagram } from "gojs-react";
import { initDiagram, handleModelChange } from "./diagrams/diagrams";
import firebase from "./services/firestore";
import { useState, useEffect } from "react";

function App() {
  const ref = firebase.firestore().collection("genelogies");

  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataToFireStore = () => {
    ref.onSnapshot((querySnapshot) => {
      const people = [];
      querySnapshot.forEach((peo) => {
        people.push(peo.data());
      });
      setPeople(people);
      setLoading(false);
    });
  };
  useEffect(() => {
    getDataToFireStore();
  }, []);
  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <div className="App">
          <ReactDiagram
            initDiagram={initDiagram}
            divClassName="diagram-component"
            nodeDataArray={people.map((peo) => ({
              key: peo?.key,
              text: peo?.name,
              color: peo?.color,
              loc: peo?.loc
            }))}
            linkDataArray={[
              { key: -1, from: 0, to: 1 },
              { key: -2, from: 0, to: 2 },
              { key: -3, from: 1, to: 1 },
              { key: -4, from: 2, to: 3 },
              { key: -5, from: 3, to: 0 }
            ]}

            // onModelChange={handleModelChange}
          />
        </div>
      )}
    </>
  );
}

export default App;
