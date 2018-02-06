import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';


class List extends Component {
  constructor() {
    super();
    this.fetchCoinList = this.fetchCoinList.bind(this);
    this.state = {
      coin: [],
    }
  }

  componentDidMount() {
    this.fetchCoinList();
  }

  fetchCoinList() {
    fetch('https://api.coinmarketcap.com/v1/ticker/?convert=KRW&limit=10', {
      method: 'GET',
    }).then(response => {
      response.json()
        .then((result) => {
          this.setState({
            coin: result,
          });
        })
    }, () => {});
  }

  render() {
    const { coin } = this.state;
    return (
      <div className="coin-container">
        <h1>This is cryptocurrency information</h1>
        <ul className="coin-list">
          {
            coin.map((item, i) => (
              <li key={i} className="coin">
                <a href={`/${item.name.toLowerCase()}`}>
                  <span className="highlight">
                    Symbol: { item.symbol } /
                  </span>
                  Price: { item.price_krw }
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default List;
