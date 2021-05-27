import { connect } from "react-redux";
//import your file
import BookShelf from "./BookShelf";
//import your actions
import { getJWTToken } from "../../Redux/actions";

const mapStateToProps = (state) => {
  return {
    //state
    JWT: state.JWT,
  };
};

const mapDispatchToProps = { getJWTToken };

export default connect(mapStateToProps, mapDispatchToProps)(BookShelf);
