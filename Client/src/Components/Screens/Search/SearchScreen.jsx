import React from "react";

//Dependencies
import styled from "styled-components";
import FlatList from "flatlist-react";
import { Link } from "react-router-dom";

const SearchScreen = ({ books, Props }) => {
  const renderBook = (item, idx) => {
    const author = item.authors;
    const authorsWithSpace = author?.join(", ");

    return (
      <Container key={idx}>
        <ImageContainer>
          <Image alt={"book-cover"} src={item.imageLinks?.thumbnail} />
        </ImageContainer>
        <TextContainer>
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
          <AuthorContainer>
            <Author>{authorsWithSpace}</Author>
          </AuthorContainer>
        </TextContainer>
      </Container>
    );
  };

  return (
    <FlatListContainer>
      <FlatList
        list={books}
        renderItem={renderBook}
        renderWhenEmpty={() => <Empty>Search for books...</Empty>}
      />
    </FlatListContainer>
  );
};

const Container = styled.div`
  display: flex;
  margin: 15px;
  align-items: center;
`;
const TextContainer = styled.div``;
const FlatListContainer = styled.div``;
const ImageContainer = styled.div`
  margin-right: 20px;
`;
const TitleContainer = styled.div``;
const AuthorContainer = styled.div``;
const Title = styled(Link)`
  color: teal;
  font-weight: 300;
  font-size: 18px;
  text-decoration: none;
`;
const Author = styled.p``;
const Empty = styled.p`
  margin: 10px;
  display: block;
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-right: 15px;
  padding-left: 15px;
`;
const Image = styled.img`
  border: 2px solid grey;
  padding: 5px;
`;
export default SearchScreen;
