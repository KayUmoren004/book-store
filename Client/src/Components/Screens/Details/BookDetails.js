import React, { useEffect, useState } from "react";

//Dependencies
import NavBar from "../../Screen Components/NavBar/NavBar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import DropDown from "../../Screen Components/Dropdown/Dropdown";
import axios from "axios";

const BookDetails = () => {
  //Local Storage
  const [bookDetails, setBookDetails] = useState([]);

  //Pass dynamic link data
  const location = useLocation();
  const bookId = location.pathname;
  const token = window.sessionStorage.getItem("auth");

  useEffect(() => {
    axios.get(`/api/${bookId}`).then((res) => setBookDetails(res.data.book));
  }, [bookId]);

  const renderDetails = (item, idx) => {
    const author = item.authors;
    const authorsWithSpace = author?.join(", ");

    return (
      <Container key={idx}>
        <TitleContainer>
          <Title>{item.title}</Title>
          <SubTitle>{item.subtitle}</SubTitle>
        </TitleContainer>

        <Body>
          <ImageContainer>
            <Image src={item.imageLinks?.thumbnail} alt="" />
          </ImageContainer>
          <Right>
            <AuthorContainer>
              <Author>Authors:</Author>
              <Author2>{authorsWithSpace}</Author2>
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
              <Shelf>Change shelf:</Shelf>
              <DropDown bookId={item.id} token={token} />
            </ShelfContainer>
          </Right>
        </Body>
      </Container>
    );
  };

  return (
    <div>
      <NavBar />

      {bookDetails && renderDetails(bookDetails)}
    </div>
  );
};

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
