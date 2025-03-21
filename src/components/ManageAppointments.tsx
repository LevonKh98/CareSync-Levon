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
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [doctors, setDoctors] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [updatedDoctor, setUpdatedDoctor] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [updatedTime, setUpdatedTime] = useState("");

  useEffect(() => {
    fetchAppointments();
    fetchDoctors();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/appointments"
      );
      if (response.data.success) {
        setAppointments(response.data.data);
      } else {
        setError("Failed to load appointments: " + response.data.message);
      }
    } catch (err) {
      setError("Failed to load appointments.");
    } finally {
      setLoading(false);
    }
  };

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/doctors");
      if (response.data.success) {
        setDoctors(response.data.data);
      }
    } catch (err) {
      console.error("Error fetching doctors:", err);
    }
  };

  const handleEditClick = (appt) => {
    setEditingAppointment(appt);
    setUpdatedDoctor(appt.doctor_id);
    setUpdatedDate(appt.date.split("T")[0]); // Format to YYYY-MM-DD
    setUpdatedTime(appt.time);
    onOpen();
  };

  const handleUpdateAppointment = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/appointments/${editingAppointment.appointment_id}`,
        {
          doctor_id: updatedDoctor,
          date: updatedDate,
          time: updatedTime,
        }
      );

      if (response.data.success) {
        alert("Appointment updated successfully!");
        onClose();
        fetchAppointments();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
      alert("Failed to update appointment.");
    }
  };

  const handleDelete = async (appointmentId) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this appointment?"
      );
      if (!confirmDelete) return;

      const response = await axios.delete(
        `http://localhost:5000/api/appointments/${appointmentId}`
      );

      if (response.data.success) {
        setAppointments(
          appointments.filter((appt) => appt.appointment_id !== appointmentId)
        );
      } else {
        alert("Failed to delete appointment: " + response.data.message);
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
      alert("Error deleting appointment.");
    }
  };

  // ✅ Fix for Filtering Appointments by Date
  const filteredAppointments = selectedDate
    ? appointments.filter((appt) => appt.date.split("T")[0] === selectedDate)
    : appointments;

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

          {/* ✅ Add New Appointment & Date Filter */}
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

          {/* ✅ Table for Displaying Appointments */}
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
                {filteredAppointments.map((appt, index) => (
                  <Tr
                    key={index}
                    bg={index % 2 === 0 ? "gray.100" : "gray.200"}
                  >
                    <Td color="gray.800">{appt.patient_name}</Td>
                    <Td color="gray.800">{appt.dob.split("T")[0]}</Td>
                    <Td color="gray.800">{appt.phone_number}</Td>
                    <Td color="gray.800">{appt.email}</Td>
                    <Td color="gray.800">{appt.doctor_name}</Td>
                    <Td color="gray.800">{appt.date.split("T")[0]}</Td>
                    <Td color="gray.800">{appt.time}</Td>
                    <Td color="gray.800">{appt.status}</Td>
                    <Td>
                      <Button
                        colorScheme="blue"
                        size="sm"
                        px={4}
                        mr={2}
                        onClick={() => handleEditClick(appt)}
                      >
                        Edit
                      </Button>
                      <Button
                        colorScheme="red"
                        size="sm"
                        px={4}
                        onClick={() => handleDelete(appt.appointment_id)}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
        </Box>
      </Flex>

      {/* ✅ Edit Appointment Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Appointment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select
              value={updatedDoctor}
              onChange={(e) => setUpdatedDoctor(e.target.value)}
            >
              <option value="">Select Doctor</option>
              {doctors.map((doc) => (
                <option key={doc.user_id} value={doc.user_id}>
                  {doc.username}
                </option>
              ))}
            </Select>
            <Input
              type="date"
              value={updatedDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setUpdatedDate(e.target.value)}
              mt={4}
            />
            <Input
              type="time"
              value={updatedTime}
              onChange={(e) => setUpdatedTime(e.target.value)}
              mt={4}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdateAppointment}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ManageAppointments;
