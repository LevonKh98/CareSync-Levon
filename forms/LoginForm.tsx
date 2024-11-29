import { Box, Button, FormLabel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <>
      <Box marginTop="100%">
        <FormLabel fontSize={50}>Staff Login</FormLabel>
        <Input placeholder="Username" marginBottom={3} />
        <Input placeholder="Password" marginBottom={3} />
        <Button>Login</Button>
      </Box>
    </>
  );
};

export default LoginForm;
