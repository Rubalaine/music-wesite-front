import styled from "styled-components";
import { Loading } from "./animations";
const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8rem;
`;

const Rings = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;
const Ring = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid var(--color-indigo);
  border-radius: 50%;
  animation: ${Loading} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--color-red) transparent transparent transparent;
  &:nth-child(1) {
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const Bouncer = () => {
  return (
    <Page>
      <Rings>
        <Ring />
        <Ring />
        <Ring />
        <Ring />
      </Rings>
    </Page>
  );
};

export default Bouncer;
