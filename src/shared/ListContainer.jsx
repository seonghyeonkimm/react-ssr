import { connect } from 'react-redux';
import { fetchCoinList } from 'Actions/coinActions';
import List from 'Shared/List';


const mapStateToProps = state => (
  {
    coin: state.coin.list,
  }
);

const mapDispatchToProps = dispatch => (
  {
    dispatch,
  }
);

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);


export default ListContainer;
