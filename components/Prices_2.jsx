import React, { Component } from "react";

class Prices extends Component {
  state = {
    currency: "usd"
  };

  setst = () => {
    this.setState({ currency: "brp" });
  };

  setunst = () => {
    this.setState({ currency: "" });
  };

  render() {
    let list = "";

    switch (this.state.currency) {
      case "usd":
        list = "usd";
        break;
      case "brp":
        list = "brp";

        break;
      default:
        list = "unset";
        break;
    }
    console.log(this.props.bpi);

    return (
      <div>
        {list}

        <br />
        <button
          type='button'
          className='btn btn-outline-primary'
          onClick={this.setst}
        >
          set state
        </button>
        <button
          type='button'
          className='btn btn-outline-primary'
          onClick={this.setunst}
        >
          set state
        </button>
      </div>
    );
  }
}

export default Prices;
