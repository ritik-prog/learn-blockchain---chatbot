import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Center,
  Square,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Alert,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
// import Typewriter from "typewriter-effect";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import ChatBotIcon from "./robot_1.png";
import { useToast } from "@chakra-ui/react";
import TypeKaro from "./component/TextModal";

const dataobj = [
  {
    key: "What is blockchain",
    content:
      "Blockchain is a digital ledger that records transactions in a decentralized and secure manner. It consists of a continuously growing list of records, called blocks, which are linked and secured using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.\n\nThe decentralized nature of the blockchain means that there is no single entity in control of the data, making it difficult for any one party to manipulate the data or alter the records. The use of cryptographic techniques ensures that once data is added to the blockchain, it cannot be altered without being detected.\n\nBlockchain technology is most commonly associated with cryptocurrencies such as Bitcoin, but it has a wide range of potential applications beyond financial services. Some examples include supply chain management, voting systems, and secure data storage and sharing.\n\nThe combination of decentralization, security, and immutability make blockchain a promising technology for many industries and applications.",
  },
  {
    key: "Why blockchain required",
    content: `Blockchain is required for several reasons:
      
1. Trust: In many cases, the traditional centralized systems are susceptible to manipulation and fraud, and it can be difficult to establish trust between parties without intermediaries. Blockchain provides a secure and transparent system for establishing trust, without relying on intermediaries.
      
2. Decentralization: Blockchain eliminates the need for intermediaries, and instead, relies on a network of computers to store and verify data. This makes the system more resilient and less susceptible to single points of failure.

3.Security: Blockchain uses cryptographic techniques to secure data, making it extremely difficult to alter or manipulate the data once it has been added to the blockchain.

4.Transparency: Blockchain provides a transparent and publicly accessible ledger of transactions, making it possible to track and verify the authenticity of transactions.

5.Efficiency: By eliminating the need for intermediaries, blockchain can greatly reduce the costs associated with many types of transactions and make them faster and more efficient.\n\nIn conclusion, blockchain is required to provide a secure, transparent, and efficient means of storing and verifying data, and to establish trust between parties without relying on intermediaries. Its potential applications are vast, and it has the potential to greatly simplify many types of transactions while also making them more secure and transparent.`,
  },
  {
    key: "How to use blockchain",
    content: `Here are some common ways to use blockchain technology:

1. Cryptocurrencies: The most well-known use of blockchain is as the underlying technology behind cryptocurrencies such as Bitcoin. People can use cryptocurrencies to securely and transparently transfer funds without relying on intermediaries.

2. Supply chain management: Blockchain can be used to track and verify the authenticity of products as they move through a supply chain. This can help to increase transparency and reduce the risk of fraud and counterfeiting.

3. Identity management: Blockchain can be used to securely store and manage personal information, allowing people to control their own data and ensuring that it is only shared with those who have permission.

4. Contract management: Blockchain can be used to create self-executing contracts, called smart contracts, which can automatically enforce the rules and regulations of a contract. This can greatly simplify complex processes and reduce the costs associated with contract enforcement.

5. Voting systems: Blockchain can be used to create secure and transparent voting systems that are resistant to tampering and manipulation.

6. Record keeping: Blockchain can be used to securely store and manage records in various industries, such as healthcare and real estate, ensuring that the data is accurate and cannot be altered without being detected.

Overall, blockchain technology has a wide range of potential applications, and it can be used to securely and transparently manage data, establish trust between parties, and simplify complex processes.`,
  },
  {
    key: "What is Hypervisor",
    content: `A hypervisor in blockchain refers to a virtualization layer that provides a secure and isolated environment for executing and managing virtual machines (VMs). In the context of blockchain, a hypervisor can be used to run multiple blockchain nodes on a single physical machine, improving the efficiency and scalability of the network.

A hypervisor can also be used to enhance the security of blockchain nodes by isolating them from the underlying operating system and hardware. This helps to protect the blockchain network from attacks and ensure the integrity of the data stored on the blockchain.

Hypervisors are commonly used in data centers and cloud computing environments, and they play an important role in ensuring the stability and security of blockchain networks. By providing a secure and isolated environment for executing blockchain nodes, hypervisors help to ensure the reliability and scalability of the network, and they can help to protect against attacks and data breaches.`,
  },
  {
    key: "What is Hashing",
    content: `Hashing is a technique used in both blockchain and in general computer science.

In general computer science, hashing refers to the process of converting an input of any length into a fixed-length output, called a hash value or message digest. Hashing algorithms, such as SHA-256, are used to generate hash values from inputs, and the resulting hash values can be used for various purposes, such as ensuring data integrity, checking the authenticity of a file, or generating a digital signature.

In blockchain, hashing is used as a key part of the consensus mechanism. In blockchain, each block in the chain contains a list of transactions, and a hash value is generated for each block. The hash value of each block is dependent on the hash value of the previous block in the chain, creating a secure and tamper-proof ledger of transactions.

In addition, hashing is used to secure transactions in blockchain. When a transaction is sent to the network, it is hashed to create a unique identifier for the transaction, and this identifier is used to verify the authenticity of the transaction when it is added to the blockchain.

In conclusion, hashing is an important technique used in both blockchain and in general computer science, and it plays a key role in ensuring the security and integrity of data.`,
  },
  {
    key: "What is NFTs",
    content:
      "The objective of this project is to develop \na chat bot with predefined commands to assist users in learning about blockchain technology and the process of minting Non-Fungible Tokens (NFTs). The chat bot will provide interactive and comprehensive information about blockchain and NFTs, helping users to understand the concepts, benefits and limitations. The chat bot will provide a user-friendly interface for users to engage with and learn about blockchain technology and NFTs. The aim is to make the learning process more accessible and interactive for users, making it easier for them to understand and apply the knowledge.",
  },
  {
    key: "What is NFTs minting",
    content: `NFTs (Non-Fungible Tokens) are a type of digital asset that exist on a blockchain network, such as Ethereum. NFTs are unique and cannot be replaced or exchanged for something of equal value, unlike cryptocurrencies like Bitcoin, which are fungible.

NFTs are often used to represent digital collectibles, such as digital art, music, or virtual real estate. They can also be used to represent other unique digital assets, such as gaming items, ticket sales, and even voting rights.

NFT Minting refers to the process of creating and issuing NFTs on a blockchain network. To mint an NFT, an individual or entity must have a digital asset, such as an image or a piece of music, and they must also have a wallet and some cryptocurrency, such as Ether, to pay for the transaction fees associated with minting the NFT.

Once the NFT is minted, it is stored on the blockchain network and is accessible to anyone who has a compatible wallet and the necessary permissions. NFTs are stored on the blockchain network in a decentralized manner, which means that they are not owned by any central authority, and they are protected from censorship and tampering.

NFT minting has become a popular trend in the digital art and collectibles space, as it allows artists, musicians, and other creators to monetize their digital creations and offer their fans a unique and valuable item that they can own and trade.`,
  },
  {
    key: "Roadmap to learn blockchain",
    content: `Here is a roadmap to help you learn blockchain:

Start with the basics: Learn the key concepts of blockchain technology, such as decentralization, consensus mechanisms, and cryptographic hashes. Study the history of blockchain, its evolution, and its use cases.

Study the technical aspects: Study the underlying technologies that make blockchain possible, such as cryptography, consensus algorithms, and distributed systems.

Learn programming languages: Learn programming languages that are commonly used in blockchain development, such as Solidity (for Ethereum), C++, or Python.

Study blockchain platforms: Study the different blockchain platforms available, such as Ethereum, Bitcoin, and Hyperledger, and understand their strengths, weaknesses, and use cases.

Get hands-on experience: Participate in coding challenges and hackathons, build simple blockchain applications, and contribute to open-source projects to get hands-on experience.

Join a community: Join online communities, attend meetups and conferences, and connect with other blockchain developers to learn from them and share your knowledge.

Learn about other related technologies: Learn about related technologies such as smart contracts, Dapps (decentralized applications), and NFTs to gain a comprehensive understanding of the blockchain ecosystem.

Keep learning: Stay updated with the latest developments in the blockchain space, attend workshops and webinars, and continue to learn and grow as a blockchain developer.

By following this roadmap and consistently working on your skills, you can become a skilled and knowledgeable blockchain developer. Remember, learning blockchain is a journey, and it requires dedication, patience, and a love of technology.`,
  },
  {
    key: "Try Blockchain",
    content: `If you're curious about blockchain and want to try it out for yourself, there are several ways you can do so. Here are a few steps you can follow to get started:

1. Learn the basics: Start by learning the key concepts of blockchain, such as decentralization, consensus mechanisms, and cryptographic hashes. Read articles, watch videos, and attend online workshops to familiarize yourself with the basics.

2. Set up a wallet: To start using blockchain, you'll need a wallet to store your digital assets. There are many different wallets available, both online and offline, so choose one that best fits your needs.

3. Get some cryptocurrency: To try out blockchain, you'll need to buy some cryptocurrency. You can purchase cryptocurrencies such as Bitcoin, Ethereum, or Litecoin through an exchange or a peer-to-peer marketplace.

4. Try out a DApp: DApps (decentralized applications) are apps that run on blockchain technology. Try out a few different DApps, such as a decentralized marketplace or a gaming platform, to get a feel for how blockchain works.

5. Participate in a blockchain community: Joining a blockchain community is a great way to learn more about the technology and connect with others who are interested in it. Attend meetups, join online forums, and participate in coding challenges and hackathons.

6. Build your own blockchain: Finally, consider building your own blockchain. This will give you a deeper understanding of how blockchain works and allow you to experiment with the technology. You can start by building a simple blockchain using a programming language like Solidity (for Ethereum) or Python.

By following these steps, you can start experimenting with blockchain and gain a deeper understanding of this exciting technology. Remember, blockchain is a rapidly evolving field, so be sure to stay up-to-date with the latest developments and continue learning as you go.`,
  },
  {
    key: "Try Minting NFT",
    content: "",
  },
];

interface ObjectType {
  [key: string]: any;
  content: any;
}

export const App = () => {
  const [chatText, setChatText] = React.useState(
    "Welcome to our Interactive Chat Bot for Blockchain Technology and NFT Learning, Where you can learn and understand these complex technologies in a fun and engaging way! \n\nI can teach you about Blockchain technology and NFTs which are rapidly growing and transforming industries around the world, but for many people, the technical aspects of these technologies can be challenging to understand. This project aims to make learning about blockchain and NFTs easier and more accessible to a wider audience. By developing an interactive chat bot, users can learn and understand these technologies in a user-friendly and engaging way. The chat bot will provide comprehensive information and answer user queries in real-time, making the learning process seamless and enjoyable. Whether you are a beginner or an expert, this chat bot is designed to help you expand your knowledge and gain a deeper understanding of blockchain and NFTs. Get started now and explore the world of blockchain and NFTs!"
  );

  const [typing, setTyping] = React.useState(true);
  const toast = useToast();

  const [matchingObjects, setMatchingObjects] = React.useState<ObjectType[]>(
    []
  );

  const [searchStr, setSearchStr] = React.useState<string>("");
  const [key, setKey] = React.useState<string>("");

  function handleSearch() {
    setMatchingObjects(
      dataobj.filter(
        (object) =>
          object.key.toLowerCase().trim() === searchStr.toLowerCase().trim()
      )
    );

    if (matchingObjects.length === 1) {
      setChatText(matchingObjects[0].content);
    } else {
      toast({
        title: "Sorry folk, No data available!!!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  }

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Grid maxH="100vh" minH="100vh" h="100vh" overflow={"hidden"}>
          <Flex color="white">
            <Box
              w="450px"
              bg="#274060"
              textAlign={"center"}
              h="100vh"
              overflow={"scroll"}
            >
              {dataobj.map((val, index) => (
                <Box
                  key={index}
                  marginTop={"40px"}
                  marginBottom={val.key == "Try Minting NFT" ? "40px" : ""}
                  marginLeft={"40px"}
                  marginRight={"40px"}
                  borderRadius="20px"
                  backgroundColor={
                    val.key == "Try Minting NFT" ? "#1ac91c" : "#e7dcdc"
                  }
                  color={val.key == "Try Minting NFT" ? "#fff" : "#000000"}
                  cursor={typing ? "not-allowed" : "pointer"}
                  onClick={() =>
                    !typing
                      ? val.key == "Try Minting NFT"
                        ? setChatText(val.key)
                        : setChatText(val.content)
                      : toast({
                          description:
                            "kindly wait for current process to complete",
                          status: "info",
                          duration: 3000,
                          isClosable: true,
                          position: "bottom-right",
                        })
                  }
                >
                  <Text
                    padding={"15px"}
                    fontFamily="SFMono-Regular,Menlo,Monaco,Consolas,monospace"
                    fontSize={"15px"}
                    fontWeight="550"
                  >
                    {val.key}
                  </Text>
                </Box>
              ))}
            </Box>
            <Flex flexDirection={"column"} w="100%" h="100vh">
              <Box
                flex="1"
                bg="#335C81"
                p="8"
                paddingTop="55px"
                overflow="scroll"
              >
                <Box
                  paddingLeft={"20"}
                  paddingRight="20"
                  color={"white"}
                  display="flex"
                >
                  <img
                    src={ChatBotIcon}
                    style={{ width: "39px", height: "39px" }}
                  />
                  <Box
                    paddingLeft={"30px"}
                    style={{ cursor: typing ? "progress" : "default" }}
                  >
                    <TypeKaro
                      text={chatText}
                      typing={typing}
                      setTyping={setTyping}
                    />
                  </Box>
                </Box>
              </Box>
              <Box bg="#416c92">
                <InputGroup size="lg">
                  <Input
                    pr="4.5rem"
                    type={"text"}
                    placeholder="Enter query here...."
                    size="lg"
                    outline={"none"}
                    border="none"
                    onChange={(e) => setSearchStr(e.target.value)}
                    disabled={typing}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      color="white"
                      backgroundColor={"#274060"}
                      _hover={{ bg: "#ebedf0", color: "black" }}
                      onClick={handleSearch}
                      isLoading={typing}
                    >
                      {"Send"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Flex>
          </Flex>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
