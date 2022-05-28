import React from "react";

import { Container } from "./styles";

import ReactLoading from "react-loading";

export const Loading = () => {
  return (
    <Container>
      <ReactLoading type="spin" color="#b4c5ff" />
    </Container>
  );
};
