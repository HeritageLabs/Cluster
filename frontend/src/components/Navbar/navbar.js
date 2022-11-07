import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import brandLogo from "../../assets/icons/brand-logo.svg";
import { login, logout } from "../../utils/cluster";
import CustomButton from "../CustomButton/customButton";

const NavBar = () => {
  const [isConnected, setIsConnected] = useState(localStorage.getItem("isDisconnected"));
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState();
  const [aeSdk, setAeSdk] = useState();

  const init = async() => {
    if(localStorage.getItem("isConnected")) {
      if(!window.client) {
        await connectWallet(); 
      }
      setIsConnected(true);
      setAddress(localStorage.getItem("isConnected"));
    }
  }

  useEffect(() => {
    init();
  }, [])

  const connectWallet = async() => {
    try {
      const client = await login();
      window.client = client;
      const account = Object.keys(client._accounts.current)[0]
      setAddress(account);
      const accountBalance = (await client.getBalance(account)) / 1e18;
      setBalance(accountBalance);
      setIsConnected(true);
      localStorage.setItem("isConnected", account);
    } catch (err) {
      console.log(err);
      window.alert("Failed to connect wallet!");
      // toast(<NotificationError text="failed to connect wallet"/>)
    }
  }

  const disconnectWallet = async() => {
    try {
      setIsConnected(false);
      window.client = undefined;
      localStorage.removeItem("isConnected");
      await logout();
    } catch (err) {
      console.log(err);
      window.alert("an error occured!");
      // toast(<NotificationError text="an error occured"/>)
    }
  }

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
      {isConnected && <Text>
          Connected user:{" "}
          <span style={{ color: "#F7E427" }}>{address.slice(0,35) + "..."}</span>
      </Text>}
      {isConnected ? 
      <CustomButton
      bg="none"
      hoverBg="brand.primary"
      hoverColor="brand.white"
      color="brand.dark"
      border="1px solid #1A202C"
      onClick={() => disconnectWallet()}
    >
      Disconnect
    </CustomButton> :
      
      <CustomButton
        bg="none"
        hoverBg="brand.primary"
        hoverColor="brand.white"
        color="brand.dark"
        border="1px solid #1A202C"
        onClick={() => connectWallet()}
      >
        Connect Wallet
      </CustomButton>}
    </Flex>
  );
};

export default NavBar;
