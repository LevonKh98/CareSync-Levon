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

  // Format date from "YYYY-MM-DDT00:00:00.000Z" → "YYYY-MM-DD"
  const formatDate = (dateString) => dateString.split("T")[0];

  // Filter appointments by selected date
  const filteredAppointments = selectedDate
    ? appointments.filter((appt) => appt.date.startsWith(selectedDate))
    : appointments;

  return (
    <Box p={6} maxWidth="1200px" mx="auto">
      <Heading size="lg" mb={4} textAlign="center">
        Manage Appointments
      </Heading>

      {/* Add New Appointment & Date Filter */}
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Button colorScheme="green" size="md">
          + Add New Appointment
        </Button>
        <Input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          width="200px"
        />
      </Box>

      {/* Loading & Error Handling */}
      {loading ? (
        <Spinner size="lg" />
      ) : error ? (
        <Text color="red.500">{error}</Text>
      ) : (
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Patient Name</Th>
              <Th>Date of Birth</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
              <Th>Doctor</Th>
              <Th>Date</Th>
              <Th>Time</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appt, index) => (
                <Tr key={index}>
                  <Td>{appt.patient_name}</Td>
                  <Td>{formatDate(appt.dob)}</Td>
                  <Td>{appt.phone_number}</Td>
                  <Td>{appt.email}</Td>
                  <Td>{appt.doctor_name}</Td>
                  <Td>{formatDate(appt.date)}</Td>
                  <Td>{appt.time}</Td>
                  <Td>{appt.status}</Td>
                  <Td>
                    <Button colorScheme="blue" size="sm" mr={2}>
                      Edit
                    </Button>
                    <Button colorScheme="red" size="sm">
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan="9" textAlign="center">
                  No appointments found.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default ManageAppointments;
