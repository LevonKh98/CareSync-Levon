import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Input,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import axios from "axios";

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      console.log("Fetching appointments...");
      const response = await axios.get(
        "http://localhost:5000/api/appointments"
      );
      console.log("API Response:", response.data);

      if (response.data.success) {
        setAppointments(response.data.data);
      } else {
        setError("Failed to load appointments: " + response.data.message);
      }
    } catch (err) {
      console.error("Error fetching appointments:", err);
      setError("Failed to load appointments. Check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => dateString.split("T")[0];

  const filteredAppointments = selectedDate
    ? appointments.filter((appt) => appt.date.startsWith(selectedDate))
    : appointments;

  const handleDelete = async (appointmentId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this appointment?"
      );
      if (!confirmDelete) return;

      // Send DELETE request to the backend
      const response = await axios.delete(
        `http://localhost:5000/api/appointments/${appointmentId}`
      );

      if (response.data.success) {
        // Remove the deleted appointment from state
        setAppointments(
          appointments.filter((appt) => appt.appointment_id !== appointmentId)
        );
      } else {
        alert("Failed to delete appointment: " + response.data.message);
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      alert("Error deleting appointment. Check the console for details.");
    }
  };

  return (
    <Box minHeight="100vh" bg="teal.700" p={6} color="white" width="100vw">
      <Flex justifyContent="center">
        <Box
          bg="white"
          p={8}
          borderRadius="lg"
          boxShadow="xl"
          width="95%"
          maxWidth="1400px"
        >
          <Heading size="lg" mb={6} textAlign="center" color="gray.800">
            Manage Appointments
          </Heading>

          {/* Add New Appointment & Date Filter */}
          <Flex mb={6} align="center">
            <Button
              colorScheme="green"
              size="md"
              borderRadius="full"
              px={6}
              fontWeight="bold"
            >
              + Add New Appointment
            </Button>
            <Spacer />
            <Flex align="center">
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                width="200px"
                borderColor="gray.400"
                bg="white"
                color="black"
                mr={4}
              />
              <Button
                colorScheme="blue"
                size="md"
                borderRadius="full"
                px={4}
                onClick={() => setSelectedDate("")}
              >
                Clear Date
              </Button>
            </Flex>
          </Flex>

          {/* Loading & Error Handling */}
          {loading ? (
            <Spinner size="lg" />
          ) : error ? (
            <Text color="red.500">{error}</Text>
          ) : (
            <Table variant="simple" colorScheme="blackAlpha" width="100%">
              <Thead>
                <Tr bg="teal.500">
                  <Th color="white">Patient Name</Th>
                  <Th color="white">Date of Birth</Th>
                  <Th color="white">Phone</Th>
                  <Th color="white">Email</Th>
                  <Th color="white">Doctor</Th>
                  <Th color="white">Date</Th>
                  <Th color="white">Time</Th>
                  <Th color="white">Status</Th>
                  <Th color="white">Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredAppointments.length > 0 ? (
                  filteredAppointments.map((appt, index) => (
                    <Tr
                      key={index}
                      bg={index % 2 === 0 ? "gray.100" : "gray.200"}
                    >
                      <Td color="gray.800">{appt.patient_name}</Td>
                      <Td color="gray.800">{formatDate(appt.dob)}</Td>
                      <Td color="gray.800">{appt.phone_number}</Td>
                      <Td color="gray.800">{appt.email}</Td>
                      <Td color="gray.800">{appt.doctor_name}</Td>
                      <Td color="gray.800">{formatDate(appt.date)}</Td>
                      <Td color="gray.800">{appt.time}</Td>
                      <Td color="gray.800">{appt.status}</Td>
                      <Td>
                        <Button
                          colorScheme="blue"
                          size="sm"
                          borderRadius="full"
                          px={4}
                          mr={2}
                          marginBottom={2}
                        >
                          Edit
                        </Button>
                        <Button
                          colorScheme="red"
                          size="sm"
                          borderRadius="full"
                          px={4}
                          onClick={() => handleDelete(appt.appointment_id)}
                        >
                          Delete
                        </Button>
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <Td colSpan="9" textAlign="center" color="gray.800">
                      No appointments found.
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default ManageAppointments;
