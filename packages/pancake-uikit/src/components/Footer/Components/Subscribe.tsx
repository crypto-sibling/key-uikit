import React from "react";
import styled from "styled-components";
import { FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Text } from "../../Text";

const StyledButton = styled(Button)`
  background: #000;
  color: #FFF;
  width: 170px;
  margin-top: 12px;
`

const StyledInput = styled(Input)`
  background-color: #FFF;
  border-radius: 4px;
  font-size: 18px;
  height: 52px;
  padding: 12px 16px;
  min-width: 310px;
`

const StyledText = styled(Text)`
  line-height: 1.1;
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 8px;
`

const Subscribe: React.FC<FlexProps> = ({ ...props }) => (
  <Flex flexDirection='column' justifyContent='flex-start' alignItems={["center", "center", "flex-start"]} mb='36px'>
    <StyledText>Sign up to</StyledText>
    <StyledText>KeySwap Newsletter</StyledText>
    <StyledInput placeholder="Enter your email address" />
    <StyledButton mt='12px'>Get started</StyledButton>
  </Flex>
);

export default React.memo(Subscribe, () => true);
