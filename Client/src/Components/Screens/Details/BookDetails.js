import React, { useEffect, useState } from "react";

//Dependencies
import NavBar from "../../Screen Components/NavBar/NavBar";
import styled from "styled-components";
import FlatList from "flatlist-react";
import { MainContext } from "../../Context/MainContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import DropDown from "../../Screen Components/Dropdown/Dropdown";

const BookDetails = () => {
  //Context Api
  const [bookSelected, shelf, setShelf] = useContext(MainContext);

  //local book storage
  const [bookDetails, setBookDetails] = useState([]);

  //pass dynamic link
  const location = useLocation();
  const bookId = location.state?.bookId;

  //console.log(bookSelected);

  // const detail = bookSelected.filter((book) => book.id === bookId);
  // setBookDetails(detail);

  // const getBook = () => {

  // };

  useEffect(() => {
    const detail = bookSelected.filter((book) => book.id === bookId);
    setBookDetails(detail);

    //console.log(shelf);
  }, [bookId, bookSelected]);

  const renderDetails = (item, idx) => {
    return (
      <Container key={idx}>
        <TitleContainer>
          <Title>{item.title}</Title>
          <SubTitle>{item.subtitle}</SubTitle>
        </TitleContainer>

        <Body>
          <ImageContainer>
            <Image alt={"book-cover"} src={item.imageLinks.thumbnail} />
          </ImageContainer>
          <Right>
            <AuthorContainer>
              <Author>Authors:</Author>
              <Author2>{item.authors}</Author2>
            </AuthorContainer>
            <DetailsContainer>
              <Details>{item.description}</Details>
            </DetailsContainer>
            <PublisherContainer>
              <Publisher>Publisher:</Publisher>
              <Space />
              <Publisher2>{item.publisher}</Publisher2>
            </PublisherContainer>
            <PublishedDateContainer>
              <PDate>Published Date: </PDate>
              <Space />
              <PDate2>{item.publishedDate}</PDate2>
            </PublishedDateContainer>
            <ShelfContainer>
              {/* <Shelf>Change shelf:</Shelf> */}
              {/* <DropDown
                // value={shelf}
                // setValue={setShelf}
                optionValue1="WTR"
                optionValue2="CR"
                optionValue3="R"
              /> */}
            </ShelfContainer>
          </Right>
        </Body>
      </Container>
    );
  };

  return (
    <div>
      <NavBar />
      <FlatListContainer>
        <FlatList list={bookDetails} renderItem={renderDetails} />
      </FlatListContainer>
    </div>
  );
};

const FlatListContainer = styled.div``;
const Container = styled.div`
  display: flex;
  margin: 20px;
  /* align-items: center; */
  flex-direction: column;
`;
const ImageContainer = styled.div`
  margin-right: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Body = styled.div`
  display: flex;
`;
const AuthorContainer = styled.div``;
const DetailsContainer = styled.div``;
const PublisherContainer = styled.div`
  display: flex;
`;
const PublishedDateContainer = styled.div`
  display: flex;
`;
const ShelfContainer = styled.div``;
const Title = styled.p`
  font-weight: 600;
  font-size: 25px;
  margin-right: 5px;
`;
const SubTitle = styled.p`
  font-weight: 400;
  color: grey;
  font-size: 25px;
`;
const Author = styled.p`
  font-weight: bold;
`;
const Details = styled.p``;
const Publisher = styled.p`
  font-weight: bold;
`;
const PDate = styled.p`
  font-weight: bold;
`;
const PDate2 = styled.p``;
const Publisher2 = styled.p``;
const Author2 = styled.p``;
const Shelf = styled.p``;
const Image = styled.img`
  border: 2px solid grey;
  padding: 5px;
`;

const Right = styled.div``;
const Space = styled.div`
  margin-right: 2px;
  margin-left: 2px;
`;

export default BookDetails;
