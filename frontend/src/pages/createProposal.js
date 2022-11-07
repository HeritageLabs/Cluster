import { Box, Flex, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TextInput from "../components/TextInputs/TextInput";
import CustomButton from "../components/CustomButton/customButton";
import NavBar from "../components/Navbar/navbar";
import SuccessModal from "../components/Modal/successModal";
import { createProposal, getDA0 } from "../utils/cluster";
import { useNavigate, useParams } from "react-router";

const CreateProposal = () => {
  const navigate = useNavigate();
  const [DAOAddress, setDAOAddress] = useState("");
  const [DAOName, setDAOName] =  useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [proposalType, setProposalType] = useState("");
  const [value, setValue] = useState("");
  const [receipientAddress, setReceipientAddress] = useState("");
  const {id} = useParams();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if ((title, description, proposalType, value)) {
      const proposalDetails = { title, description, proposalType, value: value * 1e18, receipientAddress};
    //   console.log(proposalDetails);
      await createProposal(DAOAddress, proposalDetails);
      navigate(`/dao/${id}`); 
    }
  };

  useEffect(() => {
    getDA0(id).then((res) => {
        setDAOAddress(res.contract_address);
        setDAOName(res.name);
    })
  }, [])

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
          Create a proposal for{" "}
          <span style={{ color: "#F7E427" }}>{DAOName} here!</span>
        </Text>
      </Flex>

      <SimpleGrid columns={2} mt="30px" p="15px 80px" alignItems="center">
        <Box>
          <Text fontSize="50px" width="75%" fontWeight="bold">
            Create New Proposal
          </Text>
        </Box>
        <Box overflowY="scroll" ml="-54px" w="80%">
          <form onSubmit={handleSubmit}>
            <TextInput
              type="text"
              placeholder="Enter a title for you proposal"
              label="Proposal title"
              color="brand.dark"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextInput
              type="text"
              placeholder="What is this proposal for ?"
              label="Proposal details"
              color="brand.dark"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <TextInput
              type="text"
              placeholder="transfer, add, remove, quorum voteTime"
              label="Proposal Type"
              color="brand.dark"
              value={proposalType}
              onChange={(e) => setProposalType(e.target.value)}
            />

            <TextInput
              type="text"
              placeholder="Must be less than balance for transfers"
              label="Value"
              color="brand.dark"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />

            <TextInput
              type="text"
              placeholder="Enter receipient wallet address"
              label="Receipient wallet Address"
              color="brand.dark"
              value={receipientAddress}
              onChange={(e) => setReceipientAddress(e.target.value)}
            />

            <CustomButton
              bg="brand.primary"
              hoverColor="brand.yellow"
              color="brand.white"
              border="1px solid #FAF9F7"
              mt="20px"
              w="100%"
              disabled={!title || !description || !proposalType || !value || !receipientAddress}
              href={`/dao/${id}`}
            >
              Create Proposal
            </CustomButton>
          </form>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default CreateProposal;
