import React from "react";

//Dependencies
import NavBar from "../../Screen Components/NavBar/NavBar";
import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import SearchScreen from "./SearchScreen";

const Search = (props) => {
  //State
  const [searchInput, setSearchInput] = useState("");
  const [message, setMessage] = useState("");
  const { bookSelected, setBookSelected } = useContext(BookContext);

  //Convert white space to "+" for google api
  const SpaceToPlus = (str) => {
    return str.split(" ").join("+");
  };

  //Handle Search Function
  const handleSearch = (e) => {
    e.preventDefault();

    //Fetch Books
    fetch(`api/book/search/${SpaceToPlus(searchInput)}`)
      .then((res) => res.json())
      .then((data) => {
        setBookSelected(data.books);
        setMessage(data.message);
      });
  };

  const renderSearch = () => {
    if (message == `No books matching '${searchInput}' found.`) {
      return <Empty>No books matching your search was found.</Empty>;
    } else {
      return <SearchScreen books={bookSelected} Props={props} />;
    }
  };

  return (
    <Container>
      <NavBar />
      <SearchContainer>
        <FormContainer>
          <SearchForm onSubmit={handleSearch}>
            <SearchInput
              autoFocus
              type="search"
              placeholder="Search For Books"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <SearchButtonContainer>
              <SearchButton>Search</SearchButton>
            </SearchButtonContainer>
          </SearchForm>
        </FormContainer>
      </SearchContainer>

      {renderSearch()}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const FormContainer = styled.div`
  display: block;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
const SearchContainer = styled.div`
  margin: 10px;
  display: block;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;
const SearchButtonContainer = styled.div``;
const SearchButton = styled.button`
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-left: 10px;
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

const Empty = styled.p`
  margin: 10px;
  display: block;
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-right: 15px;
  padding-left: 15px;
  color: red;
`;

export default Search;
