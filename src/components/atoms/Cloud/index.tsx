import { styled } from "styled-components";

export const Cloud = styled.div`
	animation: move 6s ease infinite;
  border-radius: 50%;
  position: absolute;
  margin-top: -30px;
  margin-left: -30px;
  background: #FFFFFF;
  height: 60px; width: 60px;
  box-shadow:
		#FFFFFF 65px -15px 0 -5px, 
		#FFFFFF 25px -25px, 
		#FFFFFF 30px 10px, 
		#FFFFFF 60px 15px 0 -10px, 
		#FFFFFF 85px 5px 0 -5px;

  @keyframes move{
    50% { transform: translateY(-15px); }
  }
`;