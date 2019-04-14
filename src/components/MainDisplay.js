import React from "react";
import ReservationForm from "./Map";

class MainDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <ReservationForm />
      </div>
    );
  }
}

export default MainDisplay;
