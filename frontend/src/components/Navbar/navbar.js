import { Box, Flex, Image } from "@chakra-ui/react";
import brandLogo from "../../assets/icons/brand-logo.svg";
import CustomButton from "../CustomButton/customButton";

const NavBar = () => {
  return (
    <Flex
      bg="brand.white"
      p="15px 80px"
      alignItems="center"
      justifyContent="space-between"
      fontSize="14px"
      style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
    >
      <Box>
        <a href="/">
          <Image cursor="pointer" src={brandLogo} alt="brand-logo" />
        </a>
      </Box>
      <CustomButton
        bg="none"
        hoverBg="brand.primary"
        hoverColor="brand.white"
        color="brand.dark"
        border="1px solid #1A202C"
      >
        Connect Wallet
      </CustomButton>
    </Flex>
  );
};

export default NavBar;
