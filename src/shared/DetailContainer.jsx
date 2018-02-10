import { connect } from 'react-redux';
import Detail from 'Shared/Detail';


const mapStateToProps = state => (
  {
    detail: state.coin.detail,
  }
);

const mapDispatchToProps = dispatch => (
  {
    dispatch,
  }
);

const DetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);

export default DetailContainer;
