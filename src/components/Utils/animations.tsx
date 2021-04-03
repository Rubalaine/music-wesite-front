import { keyframes } from "styled-components";

export const shakeWell = keyframes`
            0% {
                transform:  rotate(0deg);
            }
  
            25% {
                transform: rotate(-4deg);
            }
  
            50% {
                transform: rotate(0deg);
            }
  
            75% {
                transform: rotate(4deg);
            }  
            100% {
                transform: rotate(0deg);
            }
`;
