import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

class Stations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: 1,
      items: [],
      isLoaded: false
    };

    this.getData = this.getData.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }

  getData() {
    const { userId } = this.state;
    fetch(`http://localhost:5001/${userId}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  btnClick(e) {
    const userId = e.target.value;
    this.setState({
      userId
    });
    this.getData();
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const match = this.props.match;
    var { isLoaded, items } = this.state;
    const theData = items.map(item => (
      <li key={item.StationID}>
        <Link to={`${match.url}/${item.StationID}`}>{item.Station}</Link>
      </li>
    ));

    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          <ul>{theData}</ul>

          <Route
            path={`${match.path}/:name`}
            render={({ match }) => (
              <div>
                <h3>{match.params.name}</h3>
              </div>
            )}
          />
          <PageComponent name="1" onClick={this.btnClick} />
          <PageComponent name="2" onClick={this.btnClick} />
          <PageComponent name="3" onClick={this.btnClick} />
          <PageComponent name="4" onClick={this.btnClick} />
          <PageComponent name="5" onClick={this.btnClick} />
          <PageComponent name="6" onClick={this.btnClick} />
          <PageComponent name="7" onClick={this.btnClick} />
        </div>
      );
    }
  }
}

const PageComponent = props => {
  return (
    <button value={props.name} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Stations;
