import React, { useState } from "react";
import axios from "axios";
import {
  Input,
  Button,
  Box,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

// ✅ Define Patient Type
interface Patient {
  patient_id: number;
  name: string;
  dob: string;
  address: string;
  phone_number: string;
  email: string;
}

// ✅ Define API Response Type
interface ApiResponse {
  success: boolean;
  data?: Patient[]; // `data` is optional to prevent errors when missing
  message?: string; // `message` is optional to prevent TypeScript errors
}

// ✅ Define Props Type
interface PatientLookupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PatientLookup: React.FC<PatientLookupProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [patients, setPatients] = useState<Patient[]>([]); // ✅ Fix: Type Patient[]
  const [error, setError] = useState("");

  const searchPatients = async () => {
    if (!query.trim()) {
      setError("Enter patient name or ID");
      return;
    }

    setError("");

    try {
      // ✅ Updated API Response Type
      const response = await axios.get<ApiResponse>(
        `http://localhost:5000/api/patients?query=${query}`
      );

      if (response.data.success) {
        setPatients(response.data.data || []); // ✅ Ensure `data` exists, fallback to empty array
      } else {
        setError(response.data.message || "Unknown error occurred"); // ✅ Use default message if missing
        setPatients([]);
      }
    } catch (err) {
      setError("Error searching for patient");
      console.error("❌ Patient lookup error:", err);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Look Up Patient</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Enter Patient Name or ID"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            mb={3}
          />
          <Button colorScheme="blue" onClick={searchPatients}>
            Search
          </Button>

          {error && (
            <Text color="red.500" mt={3}>
              {error}
            </Text>
          )}

          <VStack mt={4} spacing={3} align="start">
            {patients.map((patient) => (
              <Box
                key={patient.patient_id}
                p={3}
                borderWidth="1px"
                borderRadius="md"
              >
                <Text fontWeight="bold">{patient.name}</Text>
                <Text>ID: {patient.patient_id}</Text>
                <Text>
                  Date of Birth: {new Date(patient.dob).toLocaleDateString()}
                </Text>
                <Text>Address: {patient.address}</Text>
                <Text>Phone: {patient.phone_number}</Text>
                <Text>Email: {patient.email}</Text>
              </Box>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PatientLookup;
