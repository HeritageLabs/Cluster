import { Box, Divider, Flex, Image, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { priceTagIcon } from "../assets/svgs/svg";
import HeadTag from "../components/Common/headTag";
import CustomButton from "../components/CustomButton/customButton";
import NavBar from "../components/Navbar/navbar";
import { nftData } from "../utils/constants";
import BrandLogo from "../assets/icons/brand-logo.png";
import ConfirmModal from "../components/Modal/confirmModal";
import { useState } from "react";
import { toaster } from "evergreen-ui";

const MarketPlace = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nftClicked, setNFTClicked] = useState('');
  const [priceClicked, setPriceClicked] = useState('');
  return (
    <Box>
      <HeadTag title="NFT" />
      <NavBar />

      <Box p={{ base: "10px 30px", lg: "20px 40px" }}>
        <Text fontWeight="bold" fontSize={{ base: "20px", lg: "45px" }} color="brand.primary">
          NFTs
        </Text>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          display={{ base: "block", lg: "flex" }}
        >
          <Text fontSize={{ base: "14px", lg: "16px" }}>
            NFT collectibles, marketplaces, game projects, utilities building on
            NEAR and Aurora.
          </Text>
          <Flex width={{ base: "80%", lg: "20%" }} justifyContent="space-between" mt={{ base: "20px", lg: '0' }}>
          <CustomButton
              w="100%"
              bg="none"
              border="1px solid #3A3A3ABF"
              color="brand.gray"
              hoverBg="none"
              hoverColor="black"
              testid="on-close"
              href="/home"
              mt={{ base: "10px", lg: "0" }}
            >
              Go home
            </CustomButton>
            <CustomButton
              w="100%"
              bg="none"
              border="1px solid #3A3A3ABF"
              color="brand.gray"
              hoverBg="none"
              hoverColor="black"
              testid="on-close"
              href="/my-nfts"
              mt={{ base: "10px", lg: "0" }}
            >
              View my NFTs
            </CustomButton>
          </Flex>
        </Flex>
        <Divider my="30px" />

        <Box my="20px" p={{ base: "10px 10px", lg: "20px 40px" }}>
          <SimpleGrid columns={{ base: 1, lg: 4 }} gap="65px">
            {nftData.map((nft) => (
              <Box
                p="20px"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
                borderRadius="16px"
              >
                <Image
                  src={nft.image_url}
                  h="150px"
                  borderTopRightRadius="16px"
                  borderTopLeftRadius="16px"
                  objectFit="cover"
                  w="100%"
                  alt="img"
                />
                <Flex alignItems="center" mt="20px">
                  <Box>
                    <Text fontWeight="bold" fontSize="20px" color="brand.primary">
                      {nft.title}
                    </Text>
                    <Text color="brand.gray" fontSize="12px">
                      {nft.subTitle}
                    </Text>
                  </Box>
                </Flex>
                <Text my="10px" fontSize="14px">
                  {nft.desc}
                </Text>
                <Divider my="10px" />
                <Flex alignItems="center" justifyContent="space-between">
                  <Flex mt="10px">
                    <Box mr="5px">{priceTagIcon}</Box>
                    <Text fontSize="13px" color="black" fontWeight="bold">
                      {nft.price}
                    </Text>
                  </Flex>
                  <Box
                    bg="brand.grey"
                    borderRadius="50%"
                    h="25px"
                    w="25px"
                    p="4px"
                    display="flex"
                  >
                    <Image src={BrandLogo} alt="logo" w="22px" justifyContent="center" objectFit="cover" />
                  </Box>
                </Flex>
                <CustomButton
                  w="100%"
                  bg="none"
                  border="1px solid #1C1CFF"
                  color="brand.primary"
                  hoverBg="brand.primary"
                  hoverColor="white"
                  testid="on-close"
                  mt="20px"
                  onClick={() => {
                    onOpen();
                    setNFTClicked(nft.title);
                    setPriceClicked(nft.price);
                  }}
                >
                  Buy Now
                </CustomButton>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
      <ConfirmModal
        header="Confirm NFT Purchase"
        isOpen={isOpen}
        onClose={onClose}
        handleProceed={() => {
          toaster.notify("Buy here", { id: "mess" });
          onClose();
        }}
        content={`Are you sure you want to purchase ${nftClicked} for ${priceClicked} ?`}
      />
    </Box>
  );
};

export default MarketPlace;
