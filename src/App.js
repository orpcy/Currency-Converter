import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    input: {
      baseInput: "",
      baseName: "",
      quoteName: ""
    }
  };

  handleChange = e => {
    const input = { ...this.state.input };
    input[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ input });
  };

  render() {
    const { baseInput, baseName, quoteName } = this.state.input;
    return (
      <React.Fragment>
        <div className="App">
          <h1 class="text-center curr">React Currency Converter</h1>
          <div class="formWrapper bg-dark rounded-top border border-danger">
            <form autoComplete="off">
              <div class="form-group row">
                <label for="exampleFormControlSelect1" class="col-3 ml-2 text-white">
                  From
                </label>
                <input
                  type="text"
                  name="baseInput"
                  onChange={this.handleChange}
                  class="col-4 mr-1"
                />
                <select
                  name="baseName"
                  class="btn btn-primary"
                  id="baseName"
                  onChange={this.handleChange}
                >
                  <option selected disabled>
                    Currency
                  </option>
                  <option value="USD1">USD</option>
                  <option value="NGN1">NGN</option>
                  <option value="EUR1">EUR</option>
                </select>
              </div>
              <div class="form-group row">
                <label for="exampleFormControlSelect1" class="col-3 ml-2 text-white">
                  To
                </label>
                <input
                  type="text"
                  name="quoteInput"
                  class="col-4 mr-1"
                  onChange={this.handleChange}
                  disabled
                  value={
                    baseName === "USD1" && quoteName === "NGN2"
                      ? baseInput * 1500
                      : baseName === "USD1" && quoteName === "EUR2"
                      ? baseInput * 0.89
                      : baseName === "USD1" && quoteName === "USD2"
                      ? baseInput
                      : baseName === "NGN1" && quoteName === "USD2"
                      ? baseInput * 0.00067
                      : baseName === "NGN1" && quoteName === "EUR2"
                      ? baseInput * 0.0025
                      : baseName === "NGN1" && quoteName === "NGN2"
                      ? baseInput
                      : baseName === "EUR1" && quoteName === "NGN2"
                      ? baseInput * 403.43
                      : baseName === "EUR1" && quoteName === "USD2"
                      ? baseInput * 1.12
                      : baseName === "EUR1" && quoteName === "EUR2"
                      ? baseInput
                      : null
                  }
                />
                <select
                  name="quoteName"
                  class="btn btn-primary"
                  id="quoteName"
                  onChange={this.handleChange}
                >
                  <option selected disabled>
                    Currency
                  </option>
                  <option value="USD2">USD</option>
                  <option value="NGN2">NGN</option>
                  <option value="EUR2">EUR</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
