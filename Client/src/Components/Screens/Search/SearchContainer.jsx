import React from "react";

//Dependencies
import { connect } from "react-redux";
import Search from "./Search";
import { search } from "../../Redux/actions";

const mapStateToProps = (state) => {
  return {
    searchInput: state.searchInput,
  };
};

const mapDispatchToProps = {
  search,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
