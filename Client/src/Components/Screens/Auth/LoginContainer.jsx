import { connect } from "react-redux";
import Login from "./Login";

import { loginTest } from "../../Redux/actions";

const mapStateToProps = (state) => {
  return {
    text: state.text,
  };
};

const mapDispatchToProps = {
  loginTest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
