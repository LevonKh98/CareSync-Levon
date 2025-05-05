import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const FAQ: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex
      color="gray.700"
      height="100vh"
      width="100vw"
      bg="teal.600"
      align="center"
      justify="center"
    >
      {/* Back Button */}
      <Button
        position="absolute"
        top="20px"
        left="20px"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon boxSize={7} />
      </Button>

      <Box
        bg="white"
        p={8}
        borderRadius="lg"
        width="80%"
        maxW="600px"
        maxHeight="80vh"
        overflowY="auto"
      >

        <Text fontSize="2xl" fontWeight="bold" color="teal.700" mb="4">
          Frequently Asked Questions (FAQ)
        </Text>

        <Accordion allowMultiple>
          {/* Doctors Section */}
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Doctors
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text fontWeight="bold">
                1. How can I access my patient records?
              </Text>
              <Text>
                Doctors can access patient records via the "Look Up Patient"
                section.
              </Text>

              <Text fontWeight="bold">
                2. Is there an easy way to view Patient records?
              </Text>
              <Text>
                Staff can generate a PDF version of a patients records. 
              </Text>

              <Text mt={3} fontWeight="bold">
                3. How can I see the appointments?
              </Text>
              <Text>
                The Staff page gives you options to see appointments booked for day of and a calendar to show future appointments.
              </Text>

              <Text mt={3} fontWeight="bold">
                4. Can I cancel appointments?
              </Text>
              <Text>
                The appointments page gives you the ability to cancel appointments.
              </Text>

              <Text mt={3} fontWeight="bold">
                5. Are there limits to appointments?
              </Text>
              <Text>
                When booking appointments they must be made in increments of 30 minutes. 
              </Text>

            </AccordionPanel>
          </AccordionItem>

          {/* Admin Section */}
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontWeight="bold">
                  Admin
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <Text mt={3} fontWeight="bold">
              1. What roles can I assign when creating a new user?
            </Text>
            <Text>
              Only the following roles are accepted: <b>Admin</b>, <b>Doctor</b>, and <b>Nurse</b> (case-insensitive).
            </Text>

            <Text mt={3} fontWeight="bold">
              2. Why is the "Add User" button disabled?
            </Text>
            <Text>
              The button is disabled until all fields are filled correctly and pass format validation (e.g., phone must be 10 digits, email must be valid).
            </Text>

            <Text mt={3} fontWeight="bold">
              3. How do I show or hide the password when adding a user?
            </Text>
            <Text>
              Click the eye icon in the password field to toggle between showing and hiding the password.
            </Text>

            <Text mt={3} fontWeight="bold">
              4. What phone format is required?
            </Text>
            <Text>
              The phone number must be exactly 10 digits, with no dashes or spaces (e.g., <b>1234567890</b>).
            </Text>

            <Text mt={3} fontWeight="bold">
              5. How do I remove a user from the system?
            </Text>
            <Text>
              Navigate to the "User Management" section, locate the user, and click the <b>Delete</b> or <b>Remove</b> button. You’ll be asked to confirm before the user is permanently removed.
            </Text>

            <Text mt={3} fontWeight="bold">
              6. Can I edit a user’s details after creating their account?
            </Text>
            <Text>
              Yes. Go to "User Management", select the user, then click <b>Edit</b> to update fields like role, phone, or email. Passwords cannot be reset from this page.
            </Text>

            <Text mt={3} fontWeight="bold">
              7. Is there a limit to how many users I can add?
            </Text>
            <Text>
              There is currently no set limit, but performance may vary depending on your server and database capacity. It's good practice to regularly audit and remove inactive users.
            </Text>

            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Flex>
  );
};

export default FAQ;
