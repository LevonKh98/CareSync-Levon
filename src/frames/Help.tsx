import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const Help: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/send-email", formData);
      toast({
        title: "Success!",
        description: "Your message has been sent.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex height="100vh" width="100vw" bg="teal.600" align="center" justify="center">
      <Button position="absolute" top="20px" left="20px" onClick={() => navigate(-1)}>
        <ArrowBackIcon boxSize={7} />
      </Button>

      <Box bg="white" p={8} borderRadius="lg">
        <Text fontSize="2xl" fontWeight="bold" color="teal.700" mb="4">Contact Us</Text>
        <form onSubmit={handleSubmit}>
          <FormControl id="firstName" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input value={formData.firstName} onChange={handleChange} />
          </FormControl>
          <FormControl id="lastName" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input value={formData.lastName} onChange={handleChange} />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={formData.email} onChange={handleChange} />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea value={formData.message} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="teal" mt={4} width="full">Send Message</Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Help;
