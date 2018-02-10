import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchCoinDetail, clearCoinDetail } from 'Actions/coinActions';


class Detail extends Component {
  static getInitialData(params) {
    const { name } = params;
    return fetchCoinDetail(name.toLowerCase());
  }

  componentDidMount() {
    const { detail, dispatch, history } = this.props;
    const { params } = this.props.match;
    // if client controls the application, this should be called!
    if (!detail[0].name) {
      dispatch(Detail.getInitialData(params))
        .then(result => {
          if (result.error) {
            history.replace('/');
          }
        });
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(clearCoinDetail());
  }

  render() {
    const { detail } = this.props;
    const info = detail[0];
    return (
      <div className="coin-detail-container">
        <h1>This is {info.name} Detail</h1>
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

export default withRouter(Detail);
