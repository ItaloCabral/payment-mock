import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 10px 0;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: 10px;
  `;


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Info = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  background: transparent;
  color: #4caf50;
  border: 1px solid #4caf50;
  border-radius: 25px;
  padding: 5px 20px;
  font-size: 18px;
  font-weight: bold;
  margin: auto 0 auto auto;
  cursor: pointer;
  height: 30px;
  transition: 0.2s;

  &:hover {
    background: #4caf50;
    color: #fff;
  }
`;
