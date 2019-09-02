import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
class Stations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      match: props.match
    };
  }

  componentDidMount() {
    fetch("http://localhost:5001")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.StationID}>
                <Link to={`${match.url}/${item.Station}`}>{item.Station}</Link>
              </li>
            ))}
          </ul>

          <Route path={`${match.url}/:item.Station`} />
        </div>
      );
    }
  }
}

export default Stations;
