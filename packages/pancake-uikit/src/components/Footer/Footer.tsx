import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import SocialLinks from "./Components/SocialLinks";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledText
} from "./styles";
import { FooterProps } from "./types";
import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
import Subscribe from "./Components/Subscribe";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", "block", "none"]}>
          <LogoWithTextIcon isDark width="238px" />
        </StyledIconMobileContainer>
        <Flex
          flexDirection='row'
          justifyContent={["space-around", "space-around", "space-between"]}
          alignItems="flex-start"
          mb='24px'
        >
          <Box display={["none", "none", "block"]}>
            <LogoWithTextIcon isDark width="238px" />
            <SocialLinks />
          </Box>
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  {href ? (
                    <Link
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      color={isHighlighted ? baseColors.warning : lightColors.textSubtle}
                      bold={false}
                    >
                      {label}
                    </Link>
                  ) : (
                    <StyledText>{label}</StyledText>
                  )}
                </StyledListItem>
              ))}
            </StyledList>
          ))}
          <Box display={["none", "none", "block"]}>
            <Subscribe />
          </Box>
        </Flex>
        <Box display={["block", "block", "none"]}>
          <Subscribe mt='36px' />
          <SocialLinks />
        </Box>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
