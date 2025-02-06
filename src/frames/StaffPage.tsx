import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API calls

const StaffPage = () => {
  const navigate = useNavigate();
  const [todaysAppointments, setTodaysAppointments] = useState([]); // Store fetched appointments
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(""); // Store errors if any

  // Fetch today's appointments from the backend API
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/todays-appointments"
        );
        setTodaysAppointments(response.data.data); // Store appointments in state
        setLoading(false);
      } catch (err) {
        console.error("Error fetching appointments:", err);
        setError("Failed to load appointments.");
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []); // Runs only once when the component mounts

  // Handle logout
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Flex
      align="center"
      justify="center"
      bg="gray.50"
      minHeight="100vh"
      width="100vw"
      overflow="hidden"
    >
      <Box
        bg="white"
        p={{ base: 6, md: 12 }}
        borderRadius="md"
        shadow="lg"
        width="100%"
        maxWidth="800px"
        mx="auto"
        position="relative"
      >
        {/* Logout Button */}
        <Box position="absolute" top={4} right={4} display="flex" gap={4}>
          <Button colorScheme="red" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </Box>

        {/* Staff Home Heading */}
        <Heading as="h1" size="xl" mb={4} textAlign="center" color="gray.700">
          Staff Home
        </Heading>

        {/* Welcome Message */}
        <Text textAlign="center" mb={6} color="gray.600" fontSize="lg">
          Welcome, Doctor! Here's an overview of your tasks.
        </Text>

        <Stack spacing={6}>
          {/* Today's Appointments Widget */}
          <Box
            bg="gray.100"
            p={6}
            borderRadius="md"
            shadow="sm"
            textAlign="center"
          >
            <Heading as="h3" size="md" mb={2} color="gray.700">
              Today's Appointments
            </Heading>

            {/* Show Loading or Error Messages */}
            {loading ? (
              <Spinner size="lg" color="teal.500" />
            ) : error ? (
              <Text color="red.500">{error}</Text>
            ) : (
              <>
                <Text color="gray.600">
                  {todaysAppointments.length} Appointments Scheduled
                </Text>
                <Button
                  mt={4}
                  colorScheme="teal"
                  size="sm"
                  onClick={() =>
                    alert(JSON.stringify(todaysAppointments, null, 2))
                  }
                >
                  View Details
                </Button>
              </>
            )}
          </Box>

          {/* Look Up Patient Widget */}
          <Box
            bg="gray.100"
            p={6}
            borderRadius="md"
            shadow="sm"
            textAlign="center"
          >
            <Heading as="h3" size="md" mb={2} color="gray.700">
              Look Up Patient
            </Heading>
            <Text color="gray.600">Find patient information quickly.</Text>
            <Button
              mt={4}
              colorScheme="teal"
              size="sm"
              onClick={() => alert("Look Up Patient")}
            >
              Look Up Patient
            </Button>
          </Box>

          {/* Manage Appointments Widget */}
          <Box
            bg="gray.100"
            p={6}
            borderRadius="md"
            shadow="sm"
            textAlign="center"
          >
            <Heading as="h3" size="md" mb={2} color="gray.700">
              Manage Appointments
            </Heading>
            <Text color="gray.600">View and organize all appointments.</Text>
            <Button
              mt={4}
              colorScheme="teal"
              size="sm"
              onClick={() => alert("Manage Appointments")}
            >
              Manage Appointments
            </Button>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default StaffPage;
