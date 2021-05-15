import React, { useContext, useState } from "react";

//dependencies
import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";
import { MainContext } from "../../Context/MainContext";

const DropDown = ({
  // value,
  // setValue,
  optionValue1,
  optionValue2,
  optionValue3,
}) => {
  const [shelf, setShelf] = useContext(MainContext);
  //state
  //const [value, setValue] = useState()

  // const handleChange = (event) => {
  //   ;
  // };

  return (
    <Container>
      <Select onChange={(event) => setShelf(event.target.value)} value={shelf}>
        <Option></Option>
        <Option value={optionValue1}>Want To Read</Option>
        <Option value={optionValue2}>Currently Reading</Option>
        <Option value={optionValue3}>Read</Option>
      </Select>
    </Container>
  );
};

const Container = styled.div``;
const Select = styled.select``;
const Option = styled.option``;

export default DropDown;
