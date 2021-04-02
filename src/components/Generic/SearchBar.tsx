import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import IconWrapper from "../Wrappers/IconWrapper";
const Search = styled.form`
  display: flex;
`;
const Input = styled.input`
  border: none;
  background-color: inherit;
  border-bottom: 1px solid var(--color-white);
  color: var(--color-white);
  padding: 0.8rem;
  width: 25rem;
  font-family: inherit;
  font-weight: 300;
  font-size: 1.5rem;
  margin-right: -2.5rem;
  &::placeholder {
    color: inherit;
  }
  &:focus {
    outline: none;
  }
`;
const SearchBar = () => {
  return (
    <Search>
      <Input type="text" placeholder="pesquise aqui a sua musica" />
      <IconWrapper size={1.6}>
        <BsSearch />
      </IconWrapper>
    </Search>
  );
};

export default SearchBar;
