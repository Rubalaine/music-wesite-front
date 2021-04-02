import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsCloudDownload } from "react-icons/bs";
import IconWrapper from "../Wrappers/IconWrapper";
interface Props {
  page: string;
}
const Button = styled(Link)`
  text-decoration: none;
  color: var(--color-white);
  background-color: var(--color-red);
  padding: 1.5rem;
  border-radius: 40px;
  position: absolute;
  transform: translateY(9.6rem);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.7s, transform 0.5s;
`;
const Cta = ({ page }: Props) => {
  return (
    <Button to={page}>
      <IconWrapper size={2}>
        <BsCloudDownload />
      </IconWrapper>
    </Button>
  );
};

export default Cta;