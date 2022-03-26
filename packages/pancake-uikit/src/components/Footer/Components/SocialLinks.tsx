import React from "react";
import { lightColors } from "../../../theme";
import { FlexProps } from "../../Box";
import Flex from "../../Box/Flex";
import Link from "../../Link/Link";
import IconComponent from "../../Svg/IconComponent";
import { Text } from "../../Text";
import { socials } from "../config";

const SocialLinks: React.FC<FlexProps> = ({ ...props }) => (
  <Flex flexDirection='column' mt='24px' justifyContent='flex-start' alignItems='center'>
    <Flex {...props}>
      {socials.map((social, index) => {
        const iconProps = {
          iconName: social.icon,
          width: index === 2 ? "36px" : "28px",
          color: lightColors.text,
          style: { cursor: "pointer" },
        };
        const mr = index < socials.length - 1 ? "20px" : 0;
        return (
          <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
            <IconComponent {...iconProps} />
          </Link>
        );
      })}
    </Flex>
    <Text color='text' mt='12px' fontSize='18px'>Copyright &copy;2022 KeySwap</Text>
  </Flex>
);

export default React.memo(SocialLinks, () => true);
