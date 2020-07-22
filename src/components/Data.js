import React, { Component } from "react";
import axios from "axios";

class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      renderData: false,
      page: 1,
    };
  }

  render() {
    const url = `https://rickandmortyapi.com/api/character/?page=${this.state.page}`;
    axios.get(url).then((res) => {
      this.setState({
        data: res.data.results,
        renderData: true,
      });
    });
    const click = (e) => {
      this.setState({
        page: e.target.id,
      });
    };

    return (
      <div>
        <center>
          <div className="pagination">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <button className="page-link" id="1" onClick={click}>
                    1
                </button>
                </li>
                <li className="page-item">
                  <button className="page-link" id="2" onClick={click}>
                    2
                </button>
                </li>
                <li className="page-item">
                  <button className="page-link" id="3" onClick={click}>
                    3
                </button>
                </li>
                <li className="page-item">
                  <button className="page-link" id="4" onClick={click}>
                    4
                </button>
                </li>
                <li className="page-item">
                  <button className="page-link" id="5" onClick={click}>
                    5
                </button>
                </li>
                <li className="page-item">
                  <button className="page-link" id="6" onClick={click}>
                    6
                </button>
                </li>
                <li className="page-item">
                  <button className="page-link" id="7" onClick={click}>
                    7
                </button>
                </li>
                <li className="page-item">
                  <button className="page-link" id="8" onClick={click}>
                    8
                </button>
                </li>
                <li className="page-item">
                  <button className="page-link" id="9" onClick={click}>
                    9
                </button>
                </li>
                <li className="page-item">
                  <button className="page-link" id="10" onClick={click}>
                    10
                </button>
                </li>
              </ul>
            </nav>
          </div>
        </center>
        {this.state.data.map((el) => {
          return (
            <div key={el.id} id="character">
              <img src={el.image} alt="Character img" />
              <h4 id="charName">{el.name}</h4>
              <p id="info">Status: {el.status}</p>
              <p id="info">Location: {el.location.name}</p>
              <p id="info">Origin: {el.origin.name}</p>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Data;
