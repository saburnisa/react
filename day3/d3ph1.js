import React from 'react';

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: "Kaioken"
    };
  }
  toggle = () => {
    this.setState((prevState) => ({
      change: prevState.change === "Kaioken" ? "Super Saiyan" : "Kaioken"
    }));
  };

  render() {
    return (
      <div>
     
        <h1>Goku's Current Transformation: {this.state.change}</h1>

       
        <button onClick={this.toggle}>
          click me
        </button>
      </div>
    );
  }
}

export default Information;