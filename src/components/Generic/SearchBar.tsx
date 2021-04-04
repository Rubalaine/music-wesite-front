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
  /* border-bottom: 1px solid var(--color-white); */
  background-color: var(--color-black-1);
  color: var(--color-white);
  padding: 0.8rem 1.3rem;
  width: 29rem;
  font-family: inherit;
  font-weight: 300;
  font-size: 1.5rem;
  margin-right: -3rem;
  border-radius: 10px;
  transition: all 0.4s;
  &::placeholder {
    color: inherit;
  }
  &:focus {
    outline: none;
  background-color: var(--color-black-2);

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
