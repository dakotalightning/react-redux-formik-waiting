import { connect } from "react-redux";
import Component from "./component";

import { login } from "../reducers/index";

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: values => {
    dispatch(login(values));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
