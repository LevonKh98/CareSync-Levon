import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface User {
  username: string;
  email: string;
  phone: string;
  role: string;
}

const EditUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toast = useToast();

  const [userData, setUserData] = useState<User>({
    username: "",
    email: "",
    phone: "",
    role: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch user details
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getUser/${id}`)
      .then((res) => {
        setUserData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        toast({
          title: "Error",
          description: "Failed to fetch user details.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        setLoading(false);
      });
  }, [id, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/update-user/${id}`, userData)
      .then((res) => {
        toast({
          title: "Success!",
          description: res.data.message,
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate(-1); // Go back to previous page
      })
      .catch((err) => {
        console.error("Update error:", err);
        toast({
          title: "Error",
          description: "Failed to update user.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      });
  };

  return (
    <Flex height="100vh" width="100vw" bg="teal.600" align="center" justify="center">
      {/* Back Button */}
      <Button position="absolute" top="20px" left="20px" onClick={() => navigate(-1)}>
        <ArrowBackIcon boxSize={7} />
      </Button>

      <Box bg="white" p={8} borderRadius="lg" width={700}>
        <Text fontSize="2xl" fontWeight="bold" color="teal.700" mb="4">
          Edit User
        </Text>

        {loading ? (
          <Flex justify="center">
            <Spinner size="lg" />
          </Flex>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel color="gray.700">Username</FormLabel>
              <Input
                name="username"
                value={userData.username}
                onChange={handleChange}
                color="black"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="gray.700">Email</FormLabel>
              <Input
                name="email"
                value={userData.email}
                onChange={handleChange}
                color="black"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="gray.700">Phone</FormLabel>
              <Input
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                color="black"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel color="gray.700">Role</FormLabel>
              <Input
                name="role"
                value={userData.role}
                onChange={handleChange}
                placeholder="admin/staff/doctor"
                color="black"
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" mt={4} width="full">
              Save Changes
            </Button>
          </form>
        )}
      </Box>
    </Flex>
  );
};

export default EditUser;
