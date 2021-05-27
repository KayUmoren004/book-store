import { connect } from "react-redux";
//import your file
import Search from "./Search";
//import your actions
import { CurrentBook } from "../../Redux/actions";

const mapStateToProps = (state) => {
  return {
    //state
    currentBook: state.currentBook,
  };
};

const mapDispatchToProps = { CurrentBook };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
