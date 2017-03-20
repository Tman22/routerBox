import { connect } from 'react-redux';
import { addIdea } from './actions.js';
import CreateIdea from './createIdea.js';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addIdea: (idea) => {
      dispatch(addIdea(idea))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateIdea);
