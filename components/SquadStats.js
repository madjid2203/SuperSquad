import react, { Component } from "react";
import { Connect, connect } from "react-redux";

class SquadStats extends Component {
  strength() {
    let strength = 0;
    this.props.heroes.forEach((hero) => (strength += hero.strength));
    return strength;
  }
  intelligence() {
    let intelligence = 0;
    this.props.heroes.forEach((hero) => (intelligence += hero.intelligence));
    return intelligence;
  }
  speed() {
    let speed = 0;
    this.props.heroes.forEach((hero) => (speed += hero.speed));
    return speed;
  }

  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Strength: {this.strength()}</b>
          </li>

          <li className="list-group-item">
            <b>Intellingence: {this.intelligence()}</b>
          </li>

          <li className="list-group-item">
            <b>Speed: {this.speed()}</b>
          </li>
        </ul>

        {/*
        <ul>
          {this.props.heroes.map((hero) => {
            return <li>{this.strength()}</li>;
          })}
        </ul>
        */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes,
  };
}

export default connect(mapStateToProps, null)(SquadStats);
