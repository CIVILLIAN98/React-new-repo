import react from "react";
import "./App.css";
import { useState } from "react";

class App extends react.Component {
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
            <div className="item">
              <p>
                <input type="checkbox" /> {this.props.smtn}
              </p>
              <button> Delete</button>
            </div>
            <div className="item">
              <p>
                <input type="checkbox" /> {this.props.css}
              </p>
              <button> Delete</button>
            </div>
            <div className="item">
              <p>
                <input type="checkbox" /> {this.props.html}
              </p>
              <button> Delete</button>
            </div>
            <div className="item">
              <p>
                <input type="checkbox" /> {this.props.vue}
              </p>
              <button> Delete</button>
            </div>
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
