import React, { useState, useContext } from "react";

//Dependencies
import NavBar from "../../Screen Components/NavBar/NavBar";
import styled from "styled-components";
import SearchScreen from "./SearchScreen";
//import axios from "axios";
import { MainContext } from "../../Context/MainContext";

const Search = (props) => {
  //state
  const [searchInput, setSearchInput] = useState("");
  const [book, setBook] = useState([]);
  const [bookSelected, setBookSelected] = useContext(MainContext);
  // const [images, setImages] = useState([]);
  // const [title, setTitle] = useState([]);
  // const [author, setAuthor] = useState([]);

  //const { SearchBooks } = useContext(AccessTokenContext);
  //const { SearchBooks } = useContext(MainContext);

  const SpaceToPlus = (str) => {
    //return decodeURIComponent((str + "").replace(/\+/g, "%20"));
    return str.split(" ").join("+");
  };

  //console.log(SpaceToPlus("My name is godson"));

  const search = (e) => {
    e.preventDefault();
    //props.search(SpaceToPlus(searchInput));

    // axios.request({
    //   method: "GET",
    //   url: `/api/book/search/${book}`,
    // });

    fetch(`/api/book/search/${SpaceToPlus(searchInput)}`)
      .then((res) => res.json())
      .then((data) => setBookSelected(data.books));
    //console.log(book);
    //setBook(res.data.books);
    //props.getBook(book);

    //fetch(`/api/book/search/${SpaceToPlus(searchInput)}`);

    // axios
    //   .request({
    //     method: "GET",
    //     url: `/api/book/search/${SpaceToPlus(searchInput)}`,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     // data: JSON.stringify({
    //     //   SpaceToPlus(searchInput)
    //     // })
    //   })
    //   .then((res) => {
    //     const { searchParam } = res.data;

    //   });
  };

  //console.log(bookSelected);

  return (
    <Container>
      <NavBar />
      <SearchContainer>
        <FormContainer>
          <SearchForm className="input-group" onSubmit={search}>
            <SearchInput
              type="search"
              className="form-control"
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <SearchButtonContainer>
              <SearchButton>Search</SearchButton>
            </SearchButtonContainer>
          </SearchForm>
        </FormContainer>
      </SearchContainer>
      <SearchScreen books={bookSelected} setBooks={setBook} />
    </Container>
  );
};

const SearchContainer = styled.div`
  display: block;
  padding-bottom: 1rem;
  padding-top: 1rem;
  background-color: #343a40;
`;

const FormContainer = styled.div`
  display: block;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  flex-direction: row;
`;

const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition-property: border-color, box-shadow;
  transition-duration: 0.15s, 0.15s;
  transition-timing-function: ease-in-out, ease-in-out;
  transition-delay: 0s, 0s;
  overflow: visible;
`;

const SearchButton = styled.button`
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 0rem;
`;

const SearchButtonContainer = styled.div`
  display: flex;
  margin-right: -1px;
`;

const Container = styled.div`
  width: 100%;
`;

export default Search;
