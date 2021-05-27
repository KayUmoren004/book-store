import React from "react";
import styled from "styled-components";
import DropDown from "../../Screen Components/Dropdown/Dropdown";
import FlatList from "flatlist-react";
import { Link } from "react-router-dom";
import axios from "axios";

const WantToReadScreen = ({ data, token }) => {
  const deleteBook = (bookId) => {
    axios.request({
      method: "DELETE",
      url: `/api/bookshelf/${bookId}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    window.location.reload();
  };

  const renderScreen = (item, idx) => {
    return (
      <Container key={idx}>
        <ImageContainer>
          <Image src={item.imageLinks?.thumbnail} alt="" />
        </ImageContainer>
        <BookContainer>
          <TitleContainer>
            <Title
              to={{
                pathname: `/book/${idx}`,
                state: {
                  bookId: idx,
                },
              }}
            >
              {item.title}
            </Title>
          </TitleContainer>
          <ShelfContainer>
            <Text>Change Shelf:</Text>
            <DropDown bookId={item.id} token={token} />
            <Delete onClick={() => deleteBook(item.id)}>
              Delete from Shelf
            </Delete>
          </ShelfContainer>
        </BookContainer>
      </Container>
    );
  };

  return (
    <MainContainer>
      Want To Read
      <FlatList
        list={data}
        renderItem={renderScreen}
        renderWhenEmpty={() => <Empty>Add books to your bookshelf...</Empty>}
      />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin: 20px;
  border: 2px solid grey;
  padding: 10px;
  box-shadow: 60px 16px rgb(248, 248, 248), -60px -16px rgb(248, 248, 248),
    60px -16px rgb(248, 248, 248), -60px 16px rgb(248, 248, 248);
`;

const Container = styled.div`
  display: flex;
  margin: 20px;
  /* align-items: center; */
  flex-direction: row;
`;
const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  border: 2px solid grey;
  padding: 5px;
`;
const Title = styled(Link)`
  font-size: 25px;
  color: teal;
  text-decoration: none;
  font-weight: 300;
`;
const ImageContainer = styled.div`
  margin-right: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
`;
const ShelfContainer = styled.div``;
const Text = styled.p``;
const Empty = styled.p``;
const Delete = styled.button`
  margin-top: 20px;
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 17px;
  padding: 10px 25px;
  text-decoration: none;
  &:hover {
    background-color: #5cbf2a;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

export default WantToReadScreen;
