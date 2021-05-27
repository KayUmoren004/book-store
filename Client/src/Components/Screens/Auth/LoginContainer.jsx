import { connect } from "react-redux";
import Login from "./Login";

import { getJWTToken } from "../../Redux/actions";

const mapStateToProps = (state) => {
  return {
    JWT: state.JWT,
  };
};

const mapDispatchToProps = { getJWTToken };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
