import React from 'react';
import { Box, Heading, Text, Button, Flex, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const StaffPage = () => {
  const navigate = useNavigate();

  //handles logout
  const handleLogout = () => {
    navigate('/'); // Navigates to the staff login page
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
        {/* Top-Right Buttons */}
        <Box
          position="absolute"
          top={4}
          right={4}
          display="flex"
          gap={4}
        >
          <Button
            colorScheme="teal"
            size="sm"
            onClick={() => alert('View Notifications')}
          >
            Notifications
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            onClick={() => alert('Open Settings')}
          >
            Settings
          </Button>
          <Button
            colorScheme="red"
            size="sm"
            onClick={handleLogout} // logout function
          >
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
            <Text color="gray.600">15 Appointments Scheduled</Text>
            <Button
              mt={4}
              colorScheme="teal"
              size="sm"
              onClick={() => alert('View Appointments')}
            >
              View Details
            </Button>
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
              onClick={() => alert('Look Up Patient')}
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
              onClick={() => alert('Manage Appointments')}
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
