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
import { data } from "./data";

const dataobj = data;

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
