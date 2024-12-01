import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Image,
} from "@chakra-ui/react";

const Help: React.FC = () => {
  return (
    <Flex
      height="100vh" // Ensures the entire screen height is used
      width="100vw" // Ensures the entire screen width is used
      bg="teal.600" // Background color
      align="center"
      justify="center"
      padding="0"
    >
      {/* Main container */}
      <Flex
        bg="white" // Form background
        borderRadius="lg"
        overflow="hidden"
        width={{ base: "95%", lg: "80%" }} // Responsive width
        maxWidth="1200px" // Maximum width for larger screens
        flexDirection={{ base: "column", md: "row" }} // Responsive layout
        boxShadow="lg"
      >
        {/* Left Side - Image */}
        <Box
          flex="1"
          bg="teal.700"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="20px"
        >
          <Image
            src="/helppic.png" // Ensure the image is in the public folder
            alt="Contact Us"
            boxSize={{ base: "60%", md: "80%", lg: "70%" }} // Responsive image sizing
            objectFit="contain"
          />
        </Box>

        {/* Right Side - Form */}
        <Box
          flex="2"
          padding="40px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          bg="white" // Form background
        >
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="bold"
            color="teal.700"
            mb="6"
            textAlign="center"
          >
            Contact Us
          </Text>
          <form>
            <FormControl id="first-name" isRequired mb="4">
              <FormLabel color="teal.800">First Name</FormLabel>
              <Input
                placeholder="Enter your first name"
                focusBorderColor="teal.500"
                bg="gray.100"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>

            <FormControl id="last-name" isRequired mb="4">
              <FormLabel color="teal.800">Last Name</FormLabel>
              <Input
                placeholder="Enter your last name"
                focusBorderColor="teal.500"
                bg="gray.100"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>

            <FormControl id="email" isRequired mb="4">
              <FormLabel color="teal.800">Your Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                focusBorderColor="teal.500"
                bg="gray.100"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>

            <FormControl id="message" isRequired mb="6">
              <FormLabel color="teal.800">Message</FormLabel>
              <Textarea
                placeholder="Enter your message"
                focusBorderColor="teal.500"
                bg="gray.100"
                _placeholder={{ color: "gray.500" }}
                resize="none"
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" width="full" size="lg">
              Send Message
            </Button>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Help;
