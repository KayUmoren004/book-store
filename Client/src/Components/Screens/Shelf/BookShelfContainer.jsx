import { connect } from "react-redux";
//import your file
import BookShelf from "./BookShelf";
//import your actions
import {} from "../../Redux/actions";

const mapStateToProps = (state) => {
  return {
    //state
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BookShelf);
