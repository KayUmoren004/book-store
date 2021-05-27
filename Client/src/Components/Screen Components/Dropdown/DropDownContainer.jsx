import { connect } from "react-redux";
//import your file
import DropDown from "./DropDown";
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
    WantToRead: state.WantToRead,
    CurrentlyReading: state.CurrentlyReading,
    Read: state.Read,
    currentBook: state.currentBook,
    JWT: state.JWT,
  };
};

const mapDispatchToProps = {
  CurrentBook,
  WantToRead,
  CurrentlyReading,
  Read,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
