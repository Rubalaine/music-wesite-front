import { keyframes } from "styled-components";

export const shakeWell = keyframes`
            0% {
                transform:  rotate(0deg);
            }
  
            25% {
                transform: rotate(-22deg);
            }
  
            50% {
                transform: rotate(0deg);
            }
  
            75% {
                transform: rotate(22deg);
            }  
            100% {
                transform: rotate(0deg);
            }
`;
export const Loading = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
