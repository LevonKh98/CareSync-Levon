import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Icon,
  Image,
} from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";

const StuffLogin = () => {
  return (
    <Flex
      height="100vh"
      width="100vw"
      bg="blue.50"
      direction={{ base: "column", md: "row" }}
      position="relative"
    >
      {/* Admin and Help Buttons in Bottom-Right */}
      <Box
        position="absolute"
        bottom={4}
        right={4}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        {/* Admin Button */}
        <Button colorScheme="teal" size="sm">
          Admin
        </Button>

        {/* Help Button */}
        <Button
          colorScheme="teal"
          size="sm"
          variant="outline" // Makes it distinct but consistent
          borderColor="teal.500"
          _hover={{ bg: "teal.50" }} // Light teal background on hover
        >
          Help
        </Button>
      </Box>

      {/* Left Section (Image) */}
      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={{ base: "40%", md: "100%" }}
      >
        <Image
          src="/main_pic.png"
          alt="Staff Illustration"
          maxHeight={{ base: "60%", md: "80%" }}
          objectFit="contain"
        />
      </Box>

      {/* Right Section (Login Card) */}
      <Box
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={{ base: "60%", md: "100%" }}
        p={{ base: 4, md: 8 }}
      >
        <Box
          bg="white"
          p={{ base: 4, md: 8 }}
          borderRadius="md"
          shadow="md"
          maxWidth="400px"
          width="100%"
        >
          {/* Title */}
          <Heading as="h2" size="lg" mb={4} textAlign="center" color="gray.700">
            Staff Login
          </Heading>
          <Text textAlign="center" mb={6} color="gray.600">
            Please enter your username and password to continue
          </Text>

          {/* Username Input */}
          <InputGroup mb={4}>
            <InputLeftElement
              children={<Icon as={FaUser} color="gray.400" />}
            />
            <Input
              placeholder="Username"
              variant="filled"
              bg="gray.50"
              _hover={{ bg: "gray.100" }}
              _focus={{ bg: "white", borderColor: "teal.500" }}
              color="gray.800"
              _placeholder={{ color: "gray.500" }}
            />
          </InputGroup>

          {/* Password Input */}
          <InputGroup mb={6}>
            <InputLeftElement
              children={<Icon as={FaLock} color="gray.400" />}
            />
            <Input
              placeholder="Password"
              type="password"
              variant="filled"
              bg="gray.50"
              _hover={{ bg: "gray.100" }}
              _focus={{ bg: "white", borderColor: "teal.500" }}
              color="gray.800"
              _placeholder={{ color: "gray.500" }}
            />
          </InputGroup>

          {/* Login Button */}
          <Button colorScheme="teal" size="lg" width="100%">
            Login
          </Button>
          <Button marginY="25px" colorScheme="black" size="md" width="100%">
            Forgot Password ?
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default StuffLogin;
