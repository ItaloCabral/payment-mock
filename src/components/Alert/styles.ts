import styled from "styled-components";

export const BackDrop = styled.div<{show: boolean}>`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding: 20px;
  padding-bottom: 0px;
  z-index: 101;
  width: 500px;
  background-color: #fff;
  border-radius: 10px;
  min-height: 200px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ccc;
  height: 50px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const Content = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100px;
  margin: 20px 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
`;

export const Button = styled.button<{color?: string}>`
  background: transparent;
  color: ${props => (props.color ? props.color : "#4caf50")};
  border: 1px solid ${props => (props.color ? props.color : "#4caf50")};
  border-radius: 25px;
  padding: 5px 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  height: 30px;
  transition: 0.2s;

  &:hover {
    background: ${props => (props.color ? props.color : "#4caf50")};
    color: #fff;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  margin: auto;

`;
