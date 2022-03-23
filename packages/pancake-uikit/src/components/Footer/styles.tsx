import styled from "styled-components";
import { lightColors } from "../../theme/colors";
import { Box, Flex } from "../Box";

export const StyledFooter = styled(Flex)`
  background: ${lightColors.background};
`;

export const StyledList = styled.ul`
  list-style: none;
`;

export const StyledListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    color: ${lightColors.text};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const StyledIconMobileContainer = styled(Box)`
  text-align: center;
  margin-bottom: 36px;
`;

export const StyledToolsContainer = styled(Flex)`
  border-color: ${lightColors.cardBorder};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;

export const StyledText = styled.span`
  color: ${lightColors.textSubtle};
`;
