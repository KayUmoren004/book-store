import React from "react";

//Dependencies
import styled from "styled-components";
import FlatList from "flatlist-react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
//import BookDetails from "../Details/BookDetails";

const SearchScreen = ({ books, setBooks }) => {
  //const [bookId, setBookId] = useState("");

  const RenderBook = (item, idx) => {
    //const image = item.imageLinks.thumbnail;

    //console.log(JSON.stringify(item.imageLinks));

    const author = item.authors;
    //const authorWithSpace = author

    // useEffect(() => {
    //   setBookId(idx);
    // }, [idx]);
    // console.log(bookId);

    return (
      <Container key={idx}>
        <ImageContainer>
          <Image alt={"book-cover"} src={item.imageLinks.thumbnail} />
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
            <Author>{author}</Author>
          </AuthorContainer>
        </TextContainer>
      </Container>
    );
  };

  return (
    <FlatListContainer>
      <FlatList list={books} renderItem={RenderBook} />
    </FlatListContainer>
  );
};

const Container = styled.div`
  display: flex;
  /* padding: 15px; */
  margin: 15px;
  /* justify-content: center; */
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
const Image = styled.img`
  border: 2px solid grey;
  padding: 5px;
`;
// const = styled.
// const = styled.
// const = styled.

export default SearchScreen;
