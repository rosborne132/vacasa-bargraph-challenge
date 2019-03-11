import React, { Component } from "react";
import "./App.css";

import SingleBar from "./Components/SingleBar/SingleBar";
import MultiBar from "./Components/MultiBar/MultiBar";

class App extends Component {
  state = {
    data: [],
    loading: true
  };
  performSearch = () => {
    let url =
      "https://gist.githubusercontent.com/gargrave/e2fd3d07d44862a094dabb36137a9187/raw/30d126f95eefa84895c1f5608eea69cd92629e2a/mock-api.json";
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(resData => {
        // console.log(resData);
        const newData = resData.map(data => ({
          title: data.name,
          left: {
            color: "#007cff",
            value: data.complete
          },
          right: {
            color: "#ffe944",
            value: data.incomplete
          }
        }));

        this.setState({
          data: newData,
          loading: false
        });
      })
      .catch(err => {
        console.log("Error fetching and parsing data", err);
      });
  };

  componentDidMount() {
    setTimeout(() => this.performSearch(), 2000);
  }

  render() {
    const values = [
      {
        title: "Data1",
        left: { color: "#007cff", value: 48 },
        right: { color: "#ffe944", value: 240 }
      },
      {
        title: "Data2",
        left: { color: "#007cff", value: 36 },
        right: { color: "#ffe944", value: 85 }
      },
      {
        title: "Data3",
        left: { color: "#007cff", value: 79 },
        right: { color: "#ffe944", value: 52 }
      }
    ];
    return (
      <div className="App">
        <div className="container">
          <header>
            <h1>Bargraph Challenge!</h1>
            <p>This is for a Vacasa code challenge</p>
          </header>

          <section>
            <header>
              <h2>1. Single Bargraph</h2>
            </header>
            <SingleBar
              title="Tasks Completed"
              right={{ color: "#ffe944", value: 272 }}
              left={{ color: "#007cff", value: 48 }}
            />
          </section>

          <section>
            <header>
              <h2>2. MultiBar Bargraph</h2>
            </header>
            <MultiBar values={values} />
          </section>

          <section>
            <header>
              <h2>3. AsyncMultibar Component</h2>
            </header>
            {this.state.loading ? (
              <p>Loading...</p>
            ) : (
              <MultiBar values={this.state.data} />
            )}
          </section>

          <section>
            <header>
              <h2>4. User Interaction</h2>
            </header>
            <SingleBar
              title="Tasks Completed"
              right={{ color: "#ffe944", value: 272 }}
              left={{ color: "#007cff", value: 48 }}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
