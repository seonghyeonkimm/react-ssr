import React, { Component } from 'react';
import { fetchCoinList } from 'Actions/coinActions';
import { Link } from 'react-router-dom';


class List extends Component {
  static getInitialData() {
    return fetchCoinList();
  }

  componentDidMount() {
    const { coin, dispatch } = this.props;
    // if client controls the application, this should be called!
    if (!coin.length) {
      dispatch(List.getInitialData());
    }
  }

  render() {
    const { coin } = this.props;
    return (
      <div className="coin-container">
        <h1>This is cryptocurrency information</h1>
        <ul className="coin-list">
          {
            coin.map((item, i) => (
              <li key={i} className="coin">
                <Link to={`/coin/${item.name.toLowerCase().split(' ').join('-')}`}>
                  <span className="highlight">
                    Symbol: { item.symbol } /
                  </span>
                  Price: { item.price_krw }
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default List;
