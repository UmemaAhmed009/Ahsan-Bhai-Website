import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  Hide,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";
import {Link, useNavigate} from 'react-router-dom';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate('/contact');
    //window.open('/contact');
  };

  return (
    <div id="navFix">
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={9}
        width={["100%"]}
      >

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            {/* <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            /> */}
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button className="btnRes">
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button className="btnRes">
                  <a href="#Services">
                    <b>Services</b>
                  </a>
                </Button>

                <Button className="btnRes">
                  <a href="#Benefits">
                    {" "}
                    <b>Benefits</b>
                  </a>
                </Button>

                <Button className="btnRes">
                  <a href="#Roadmap">
                    <b>Roadmap</b>
                  </a>
                </Button>

                <Button className="btnRes">
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>
              </HStack>
            </HStack>
          {/* {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button>
                  <a href="#About">
                    <b>About</b>
                  </a>
                </Button>

                <Button>
                  <a href="#Skills">
                    {" "}
                    <b>Skills</b>
                  </a>
                </Button>

                <Button>
                  <a href="#Projects">
                    <b>Projects</b>
                  </a>
                </Button>

                <Button>
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null} */}

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Button
                backgroundColor="#a891b7"
                _hover={{ bg: "#a891b7", color: "black" }}
                color="white"
                variant="solid"
                
                onClick={onButtonClick}
                size={["sm", "md"]}
                id="resumeBtn"
              >
                {/* <Link to="/contact"> */}
                CONTACT US
                {/* </Link> */}
                {/* <Link></Link> */}
                  
                {/* <Link
                    id="navRes"
                    href={Shubham_Verma_Resume}
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                    download="Shubham_Verma_Resume"
                  >
                    RESUME
                  </Link> */}
              </Button>
            </Stack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#About">
                    <b>Services</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Skills">
                    {" "}
                    <b>Benefits</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Projects">
                    <b>Roadmap</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}
