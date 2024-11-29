import React from "react";
import { Button, Box, Heading, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.50"
    >
      <Heading as="h1" size="xl" mb={4}>
        Chakra UI Test
      </Heading>
      <Text fontSize="lg" mb={4}>
        If you see this, Chakra UI is working!
      </Text>
      <Button colorScheme="teal" size="lg">
        Click Me
      </Button>
    </Box>
  );
}

export default App;
