import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
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
import { useNavigate } from "react-router-dom";

const Help: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Flex
      height="100vh"
      width="100vw"
      bg="teal.600"
      align="center"
      justify="center"
      padding="0"
    >
      {/* Back Button */}
      <Button
        position="absolute"
        top="20px"
        left="20px"
        bg="teal.500" // Button background
        size="lg" // Button size
        borderRadius="full"
        border="2px solid teal" // Add border for better visibility
        onClick={() => navigate(-1)} // Navigate back to the previous page
        _hover={{ bg: "teal.300" }} // Hover effect
        padding="24px" // Padding for larger icon
        zIndex="10" // Ensure it appears above all elements
      >
        <ArrowBackIcon boxSize={7} />
      </Button>

      {/* Main container */}
      <Flex
        bg="white"
        borderRadius="lg"
        overflow="hidden"
        width={{ base: "95%", lg: "80%" }}
        maxWidth="1200px"
        flexDirection={{ base: "column", md: "row" }}
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
            src="/helppic.png" // Ensure this image is in the public folder
            alt="Contact Us"
            boxSize={{ base: "60%", md: "80%", lg: "70%" }} // Responsive size
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
          bg="white"
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
                color="gray.800"
                bg="gray.100"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>

            <FormControl id="last-name" isRequired mb="4">
              <FormLabel color="teal.800">Last Name</FormLabel>
              <Input
                placeholder="Enter your last name"
                focusBorderColor="teal.500"
                color="gray.800"
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
                color="gray.800"
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
                color="gray.800"
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
