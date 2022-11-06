import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import CustomButton from "../components/CustomButton/customButton";
import NavBar from "../components/Navbar/navbar";

const Home = () => {
    const [viewAllDAO, setViewAllDAO] = useState(false);
  const allDAO = [
    {
        id: 1,
      name: "Heritage DAO",
      member: "12",
      amount: "3,400ae",
      isOwned: false,
      dateCreated: "22/03/2022",
    },
    {
        id: 2,
      name: "Legacy DAO",
      member: "22",
      amount: "8,400ae",
      isOwned: true,
      dateCreated: "22/03/2022",
    },
    {
        id: 3,
      name: "Legacy DAO",
      member: "22",
      amount: "8,400ae",
      isOwned: true,
      dateCreated: "22/03/2022",
    },
    {
        id: 4,
      name: "Heritage DAO",
      member: "12",
      amount: "3,400ae",
      isOwned: false,
      dateCreated: "22/03/2022",
    },
  ];
  return (
    <Box>
      <NavBar />
      <Box mt="40px" width="100%" m="30px auto" textAlign="center">
        <Box mx="auto">
          <CustomButton
            bg="brand.primary"
            hoverBg="brand.white"
            hoverColor="brand.primary"
            color="brand.white"
            border="1px solid #FAF9F7"
            w="30%"
            mx="auto"
            href="/create-dao"
          >
            Create a new DAO
          </CustomButton>
        </Box>
        <Box>
          <CustomButton
            bg="none"
            hoverBg="brand.primary"
            hoverColor="brand.white"
            color="brand.dark"
            border="1px solid #1A202C"
            w="30%"
            m="20px 0"
            mx="auto"
            onClick={() => setViewAllDAO(!viewAllDAO)}
          >
            View all DAOs
          </CustomButton>
        </Box>
      </Box>

        {viewAllDAO &&
        <Box my="10px">
            {allDAO.length < 1 ? (
            <Text textAlign="center">You have no DAO yet. Start by creating a 
            <a href="/create-dao"><span style={{ color: "#1C1CFF", cursor: "pointer", marginLeft: "8px" }}>new DAO</span></a></Text>
            ) : (
        <SimpleGrid columns={3} mt="30" gap="20px" p="15px 80px">
            {allDAO.map((dao, index) => (
                <Box
                    padding="10px 20px"
                    mt="20px"
                    borderRadius="8px"
                    style={{
                    boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                    w="80%"
                    bg="white"
                    border=""
                    p="20px"
                    key={index}
                >
                    <Text color="brand.primary" fontWeight="bold" fontSize="22px">
                    {dao.name}
                    </Text>
                    <Divider my="10px" />
                    <Flex justifyContent="space-between" mt="10px">
                    <Text>Amount:</Text>
                    <Text ml="10px" color="brand.gray">
                        {dao.amount}
                    </Text>
                    </Flex>
                    <Flex justifyContent="space-between" mt="10px">
                    <Text>Total member: </Text>
                    <Text ml="10px" color="brand.gray">
                        {dao.member} members
                    </Text>
                    </Flex>
                    <Flex justifyContent="space-between" mt="10px">
                    <Text>Date Created: </Text>
                    <Text ml="10px" color="brand.gray">
                        {dao.dateCreated}
                    </Text>
                    </Flex>
                    <Text mt="15px" color="brand.primary" fontSize="14px">
                        {dao.isOwned ? "DAO created by me" : "Not owned"}
                    </Text>
                    <CustomButton
                    bg="none"
                    hoverBg="brand.primary"
                    hoverColor="brand.white"
                    color="brand.dark"
                    border="1px solid #1A202C"
                    mt="10px"
                    href={`/dao/${dao.id}`}
                    >
                    View DAO
                    </CustomButton>
                </Box>
            ))}
        </SimpleGrid>
            )}
        </Box>
        }
    </Box>
  );
};

export default Home;
