import React from "react";
import { Box, FormControl, Stack, Input, Button, Center } from "native-base";

const Empty_Email = {
  email: "",
};

export default function ForgotPassword() {
  const [email, setEmail] = [Empty_Email];
  const [error, setError] = [{}];
  return (
    <Center alignItems="center" h="5/6">
      <Box w="100%" maxWidth="300px">
        <FormControl>
          <FormControl.Label>
            Please enter your email below to retrieve your password
          </FormControl.Label>
          <Stack>
            <Input size="lg" placeholder="Email" />
          </Stack>
        </FormControl>
        <Box>
          <Stack>
            <Button>Submit</Button>
            {/* <FormControl.ErrorMessage></FormControl.ErrorMessage> */}
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}
