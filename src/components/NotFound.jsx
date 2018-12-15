import React from "react";
import styled from "styled-components";

import Logo from "logo.svg";

const Wrapper = styled.div`
  text-align: center;
  vertical-align: middle;
  margin: 10% 0 10% 0;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
`;

const Image = styled.img`
  width: 30%;
  max-width: 80vw;
  animation: logo-spin infinite 20s linear;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Title>404 Not Found</Title>
      <Image src={Logo} alt="logo" />
    </Wrapper>
  );
};

export default NotFound;