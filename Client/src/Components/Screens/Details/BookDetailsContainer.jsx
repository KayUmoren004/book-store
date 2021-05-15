import { connect } from "react-redux";
//import your file
import BookDetails from "./BookDetails";

//import your actions
import { getBook } from "../../Redux/actions";

const mapStateToProps = (state) => {
  return {
    //state
    book: state.book,
  };
};

const mapDispatchToProps = {
  getBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
