import { connect } from "react-redux";
//import your file
import BookDetails from "./BookDetails";
//import your actions
import {
  CurrentBook,
  WantToRead,
  CurrentlyReading,
  Read,
} from "../../Redux/actions";

const mapStateToProps = (state) => {
  return {
    //state
    currentBook: state.currentBook,
    JWT: state.JWT,
    WantToRead: state.WantToRead,
    CurrentlyReading: state.CurrentlyReading,
    Read: state.Read,
  };
};

const mapDispatchToProps = {
  CurrentBook,
  WantToRead,
  CurrentlyReading,
  Read,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
