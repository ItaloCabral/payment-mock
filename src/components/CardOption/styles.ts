import styled from "styled-components";

export const Container = styled.div`
  width: 95%;

`;

export const InfoCard = styled.div<{isSelected: boolean}>`
  width: 100%;
  height:90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  background-color: #fff;
  box-shadow: 0px 0px 10px ${props => (props.isSelected ? "#66cca0" : "#ccc")};
  transform: scale(${props => (props.isSelected ? 1.01 : 1)});
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;


