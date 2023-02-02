import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import { ConnectWallet, useAddress, useNFTDrop } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { BigNumber, ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";

const TypeKaro = ({ text, typing, setTyping }: any) => {
  const [currentText, setCurrentText] = useState("");

  const typeText = async () => {
    if (text == "Try Minting NFT") {
      text = `To try minting NFTs, you need to follow these steps:
1. Choose a blockchain platform
2. Set up a wallet To mint NFTs
3. Choose a smart contract
4. Mint your NFT
5. Verify your NFT

Here is a live example of NFT minting where you can connect Ethereum wallet and mint NFTs in testnet and By connecting Ethereum wallets, you can seamlessly mint their own NFTs without having to navigate the complex technicalities of blockchain technology.
      `;
    }
    setTyping(true);
    let temp = "";
    for (const char of text) {
      temp = temp + char;
      setCurrentText(temp);
      await new Promise((resolve) => setTimeout(resolve, 30));
    }
    setTyping(false);
  };

  useEffect(() => {
    typeText();
  }, [text]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  const handleSpeakClick = () => {
    if (!text) {
      return;
    }

    if (text == "Try Minting NFT") {
      text = `To try minting NFTs, you need to follow these steps:
1. Choose a blockchain platform
2. Set up a wallet To mint NFTs
3. Choose a smart contract
4. Mint your NFT
5. Verify your NFT

Here is a live example of NFT minting where you can connect Ethereum wallet and mint NFTs in testnet and By connecting Ethereum wallets, you can seamlessly mint NFTs without having to navigate the complex technicalities of blockchain technology.
      `;
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSpeakStop = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div style={{ overflow: "scroll" }} ref={containerRef}>
      {text == "Try Minting NFT" ? (
        <>
          <pre style={{ whiteSpace: "pre-wrap" }}>{currentText}</pre>
          {!typing && <MintNft />}
        </>
      ) : (
        <pre style={{ whiteSpace: "pre-wrap" }}>{currentText}</pre>
      )}
      {typing ? (
        <></>
      ) : (
        <Box display="flex" marginTop="7px">
          {" "}
          <Button
            onClick={handleSpeakClick}
            color="white"
            backgroundColor={"#274060"}
            _hover={{ bg: "#ebedf0", color: "black" }}
          >
            speak
          </Button>
          <Button
            marginLeft="10px"
            onClick={handleSpeakStop}
            color="white"
            backgroundColor={"#274060"}
            _hover={{ bg: "#ebedf0", color: "black" }}
          >
            stop
          </Button>
        </Box>
      )}
    </div>
  );
};

const MintNft = () => {
  const [ClaimedSupply, setClaimedSupply] = useState<any>(0);
  const [TotalSupply, setTotalSupply] = useState<any>(0);
  const [loading, setLoading] = useState(false);
  const address = useAddress();
  const mint = () => {};
  const sdk = new ThirdwebSDK("goerli");
  const nftDrop = useNFTDrop("0xe8709726b415C24F60DBb2a9B4dAF08Ea4Dcd1FD");
  const toast = useToast();

  useEffect(() => {
    const fetchNftDropData = async () => {
      const claimed = await nftDrop?.getAllClaimed();
      const totalsupply = await nftDrop?.totalSupply();
      setClaimedSupply(claimed);
      setTotalSupply(totalsupply);
    };
    fetchNftDropData();
  }, [nftDrop]);

  const mintasyncnft = async () => {
    setLoading(true);
    const quantity = 1; // how many unique NFTs you want to claim
    const adr = address?.toString();
    await nftDrop
      ?.claimTo(String(adr), quantity)
      .then(async (tx) => {
        const receipt = tx[0].receipt; // the transaction receipt
        const claimedTokenId = tx[0].id; // the id of the NFT claimed
        const claimedNFT = await tx[0].data(); // (optional) get the claimed NFT metadata
        window.open(`https://testnets.opensea.io/${address}`, "_blank");
        if (!toast.isActive("minting")) {
          toast({
            id: "minting",
            title: "Succefully minting",
            description: "Check opensea to view your nft",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  return (
    <>
      <Flex>
        <>
          {address && `Your Wallet address ${address}`}
          <ConnectWallet />
        </>
      </Flex>
      {address && (
        <Box marginTop="20px">
          <Button
            colorScheme="yellow"
            onClick={() => mintasyncnft()}
            isLoading={loading}
            loadingText="Minting"
          >
            Mint NFT
          </Button>
        </Box>
      )}
    </>
  );
};

export default TypeKaro;
