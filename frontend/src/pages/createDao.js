import { Box, Flex, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import TextInput from "../components/TextInputs/TextInput";
import CustomButton from "../components/CustomButton/customButton";
import NavBar from "../components/Navbar/navbar";
import SuccessModal from "../components/Modal/successModal";

const CreateDao = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [fullName, setFullName] = useState("");
  const [votingTime, setVotingtime] = useState("");
  const [quorum, setQuorum] = useState("");
  const [walletAddr, setWalletAddr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, votingTime, quorum, walletAddr });
    if ((fullName, votingTime, quorum, walletAddr)) {
      onOpen();
    }
  };
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
        <Text>
          Work with like-minded folks around the globe by creating a new{" "}
          <span style={{ color: "#F7E427" }}>DAO here!</span>
        </Text>
      </Flex>

      <SimpleGrid columns={2} mt="30px" p="15px 80px" alignItems="center">
        <Box>
          <Text fontSize="50px" width="75%" fontWeight="bold">
            Create New DAO
          </Text>
        </Box>
        <Box overflowY="scroll" ml="-54px" w="80%">
          <form onSubmit={handleSubmit}>
            <TextInput
              type="text"
              placeholder="Enter your full name for DAO"
              label="DAO Name"
              color="brand.dark"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <TextInput
              type="time"
              placeholder="Enter voting time in hours"
              label="Voting Time"
              color="brand.dark"
              value={votingTime}
              onChange={(e) => setVotingtime(e.target.value)}
            />

            <TextInput
              type="text"
              placeholder="Enter quorum in percentage"
              label="Quorum (%)"
              color="brand.dark"
              value={quorum}
              onChange={(e) => setQuorum(e.target.value)}
            />

            <TextInput
              type="text"
              placeholder="Enter member's wallet address"
              label="Member's wallet Address"
              color="brand.dark"
              value={walletAddr}
              onChange={(e) => setWalletAddr(e.target.value)}
            />

            <CustomButton
              bg="brand.primary"
              hoverColor="brand.yellow"
              color="brand.white"
              border="1px solid #FAF9F7"
              mt="20px"
              w="100%"
              disabled={!fullName || !votingTime || !quorum || !walletAddr}
              href="/home"
            >
              Create DAO
            </CustomButton>
          </form>
        </Box>
      </SimpleGrid>

      <SuccessModal
        isOpen={isOpen}
        onClose={onClose}
        description="You have successfully created a DAO"
        message="DAO Successful!"
        cta="Save Content"
        testid="modal-open"
      />
    </Box>
  );
};

export default CreateDao;
