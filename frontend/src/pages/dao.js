import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CustomButton from "../components/CustomButton/customButton";
import NavBar from "../components/Navbar/navbar";

const Dao = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <Box>
      <NavBar />
      <Flex
        bg="brand.primary"
        color="brand.white"
        padding="10px 20px"
        mt="20px"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Text>View informations about Heritage DAO here</Text>
      </Flex>
      <Box p="15px 80px">
        <SimpleGrid columns={2} mt="30px" p="15px 80px">
          <Box overflow="hidden">
            <Text fontSize="40px" width="75%" fontWeight="bold">
              Details
            </Text>
          </Box>
          <Box overflowY="scroll">
            <SimpleGrid columns={2} gap="20px">
              <Flex
                justifyContent="space-between"
                mt="10px"
                border="1px solid #1A202C"
                p="10px 20px"
              >
                <Text>Members:</Text>
                <Text ml="10px" color="brand.gray">
                  12 members
                </Text>
              </Flex>
              <Flex
                justifyContent="space-between"
                mt="10px"
                border="1px solid #1A202C"
                p="10px 20px"
              >
                <Text>Voting Time:</Text>
                <Text ml="10px" color="brand.gray">
                  72 hours
                </Text>
              </Flex>
              <Flex
                justifyContent="space-between"
                mt="10px"
                border="1px solid #1A202C"
                p="10px 20px"
              >
                <Text>Quorum:</Text>
                <Text ml="10px" color="brand.gray">
                  80%
                </Text>
              </Flex>
              <Flex
                justifyContent="space-between"
                mt="10px"
                border="1px solid #1A202C"
                p="10px 20px"
              >
                <Text>Balance:</Text>
                <Text ml="10px" color="brand.gray">
                  20,000ae
                </Text>
              </Flex>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
        <Divider my="40px" />
        <SimpleGrid columns={2} p="15px 80px">
          <Box overflow="hidden">
            <Text fontSize="40px" width="75%" fontWeight="bold">
              Proposals
            </Text>
          </Box>
          <Box overflowY="scroll">
            <SimpleGrid columns={2} gap="20px">
              <Flex
                justifyContent="space-between"
                mt="10px"
                border="1px solid #1A202C"
                p="10px 20px"
              >
                <Text>Ongoing Proposals:</Text>
                <Text ml="10px" color="brand.gray">
                  3
                </Text>
              </Flex>
              <Flex
                justifyContent="space-between"
                mt="10px"
                border="1px solid #1A202C"
                p="10px 20px"
              >
                <Text>Awaiting Execution:</Text>
                <Text ml="10px" color="brand.gray">
                  2
                </Text>
              </Flex>
              <Flex
                justifyContent="space-between"
                mt="10px"
                border="1px solid #1A202C"
                p="10px 20px"
              >
                <Text>All Proposals:</Text>
                <Text ml="10px" color="brand.gray">
                  20
                </Text>
              </Flex>
            </SimpleGrid>
            <Box
              padding="10px 20px"
              mt="40px"
              borderRadius="8px"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              w="100%"
              bg="white"
              border=""
              p="20px"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="brand.primary" fontWeight="bold" fontSize="22px">
                  Change Legacy UI
                </Text>
                <Text>10,000ae</Text>
              </Flex>
              <Divider my="10px" />
              <Text ml="10px" color="brand.gray">
                Employ a UI/UX Designer to redesign
              </Text>
              <Text ml="10px" color="brand.gray">
                Legacy and Hexagon
              </Text>
              <CustomButton
                bg="none"
                hoverBg="brand.primary"
                hoverColor="brand.white"
                color="brand.dark"
                border="1px solid #1A202C"
                mt="10px"
              >
                Excecute
              </CustomButton>
            </Box>
            <Box
              padding="10px 20px"
              mt="40px"
              borderRadius="8px"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              }}
              w="100%"
              bg="white"
              border=""
              p="20px"
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Text color="brand.primary" fontWeight="bold" fontSize="22px">
                  Giveaway
                </Text>
                <Text>4,500ae</Text>
              </Flex>
              <Divider my="10px" />
              <Text ml="10px" color="brand.gray">
                Do giveaway for our community on twitter space, instagram and
                facebook
              </Text>
              <CustomButton
                bg="none"
                hoverBg="brand.primary"
                hoverColor="brand.white"
                color="brand.dark"
                border="1px solid #1A202C"
                mt="10px"
              >
                Vote
              </CustomButton>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Dao;
