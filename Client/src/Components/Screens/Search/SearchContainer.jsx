import React from "react";

//Dependencies
import { connect } from "react-redux";
import Search from "./Search";
import { search, getBook } from "../../Redux/actions";

const mapStateToProps = (state) => {
  return {
    searchInput: state.searchInput,
    book: state.book,
  };
};

const mapDispatchToProps = {
  search,
  getBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
