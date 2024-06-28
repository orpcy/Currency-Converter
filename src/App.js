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

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState((prevState) => ({
      input: {
        ...prevState.input,
        [name]: value
      }
    }));
  };

  getConvertedValue = () => {
    const { baseInput, baseName, quoteName } = this.state.input;
    const rates = {
      USD: { NGN: 1500, EUR: 0.89, USD: 1 },
      NGN: { USD: 0.00067, EUR: 0.00061, NGN: 1 },
      EUR: { NGN: 1645, USD: 1.12, EUR: 1 }
    };
    return baseInput * (rates[baseName.slice(0, 3)][quoteName.slice(0, 3)] || 0);
  };

  render() {
    const { quoteName } = this.state.input;
    return (
      <div className="App">
        <h1 className="text-center curr">React Currency Converter</h1>
        <div className="formWrapper bg-dark rounded-top border border-danger">
          <form autoComplete="off">
            <div className="form-group row">
              <label htmlFor="baseName" className="col-3 ml-2 text-white">
                From
              </label>
              <input
                type="text"
                name="baseInput"
                onChange={this.handleChange}
                className="col-4 mr-1"
              />
              <select
                name="baseName"
                className="btn btn-primary"
                id="baseName"
                onChange={this.handleChange}
              >
                <option value="" disabled selected>
                  Currency
                </option>
                <option value="USD1">USD</option>
                <option value="NGN1">NGN</option>
                <option value="EUR1">EUR</option>
              </select>
            </div>
            <div className="form-group row">
              <label htmlFor="quoteName" className="col-3 ml-2 text-white">
                To
              </label>
              <input
                type="text"
                name="quoteInput"
                className="col-4 mr-1"
                value={quoteName ? this.getConvertedValue() : ""}
                disabled
              />
              <select
                name="quoteName"
                className="btn btn-primary"
                id="quoteName"
                onChange={this.handleChange}
              >
                <option value="" disabled selected>
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
    );
  }
}

export default App;
