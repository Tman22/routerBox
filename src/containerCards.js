import { connect } from 'react-redux';
import { Cards } from './cards.js';

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, null)(Cards);
