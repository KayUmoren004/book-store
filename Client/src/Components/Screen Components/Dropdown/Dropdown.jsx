import React, { useEffect, useState } from "react";

//dependencies
import styled from "styled-components";
import axios from "axios";

const DropDown = ({ bookId, token }) => {
  //State
  const [value, setValue] = useState("");

  useEffect(() => {
    if (parseInt(value) === 0) {
      return "Space";
    } else if (parseInt(value) === 1) {
      axios.request({
        method: "PUT",
        url: `/api/bookshelf/${bookId}/wantToRead`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    } else if (parseInt(value) === 2) {
      axios.request({
        method: "PUT",
        url: `/api/bookshelf/${bookId}/currentlyReading`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    } else if (parseInt(value) === 3) {
      axios.request({
        method: "PUT",
        url: `/api/bookshelf/${bookId}/read`,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
    }
  }, [value, token, bookId]);

  const handleChange = (e) => {
    setValue(e.target.value);

    window.location.reload();
  };

  return (
    <Container>
      <Select onChange={handleChange} value={value}>
        <Option value={0}></Option>
        <Option value={1}>Want To Read</Option>
        <Option value={2}>Currently Reading</Option>
        <Option value={3}>Read</Option>
      </Select>
    </Container>
  );
};

const Container = styled.div``;
const Select = styled.select``;
const Option = styled.option``;

export default DropDown;
