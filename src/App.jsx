import react from "react";
import "./App.css";

const data = [
  { id: 1, name: "something here" },
  { id: 2, name: "something here" },
  { id: 3, name: "something here" },
  { id: 4, name: "something here" },
  { id: 1, name: "something here" },
  { id: 2, name: "something here" },
  { id: 3, name: "something here" },
  { id: 4, name: "something here" },
  { id: 4, name: "something here" },
  { id: 1, name: "something here" },
  { id: 2, name: "something here" },
  { id: 3, name: "something here" },
];

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: data,
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="head">
            <h1>4 Tasks</h1>
            <h3>4 Remain</h3>
          </div>
          <hr />
          <div className="body">
            {this.state.task.map((value) => {
              return (
                <div className="item">
                  <p>
                    <input type="checkbox" /> {value.name}
                  </p>
                  <button> Delete</button>
                </div>
              );
            })}
          </div>
          <div className="footer">
            <input className="inp" type="text" placeholder="Add Todo..." />{" "}
            <button className="ftr-btn">Add</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
