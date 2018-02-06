import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'isomorphic-fetch';


const DETAIL = 'https://api.coinmarketcap.com/v1/ticker/';
//https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=KRW

class Detail extends Component {
  constructor() {
    super();
    this.fetchCoinDetail = this.fetchCoinDetail.bind(this);
    this.state = {
      detail: [{
        symbol: '',
        rank: '',
        price_usd: '',
        price_krw: '',
        last_updated: '',
      }],
    }
  }

  componentDidMount() {
    this.fetchCoinDetail()
  }

  fetchCoinDetail() {
    const { name } = this.props.match.params;
    // NOT THE BEST SOLUTION BUT NOT RELATED TO THIS REPO
    // JUST LET IT WORKING
    const parsedName = name.split(' ');
    fetch(`https://api.coinmarketcap.com/v1/ticker/${parsedName.join('-')}/?convert=KRW`, {
      method: 'GET',
    }).then(response =>{
      response.json()
        .then(
          detail => this.setState({detail}),
          () => {}
        )
    });
  }

  render() {
    const coinName = this.props.match.params.name;
    const { detail } = this.state;
    const info = detail[0];
    return (
      <div className="coin-detail-container">
        <h1>This is {coinName} Detail</h1>

        <ul className="coin-list">
          <li>symbol: {info.symbol}</li>
          <li>rank: {info.rank}</li>
          <li>price_usd: {info.price_used}</li>
          <li>price_krw: {info.price_krw}</li>
          <li>last_updated: {info.last_updated}</li>
        </ul>
        <Link to="/">GO BACK TO LIST</Link>
      </div>
    )
  }
}

export default Detail;
