import {
  Box,
  Text,
  Button,
  FormControl,
  Input,
  HStack,
  AspectRatio,
  Flex,
  Spacer,
  Stack,
  Center,
  Link,
} from "native-base";
export default function Register() {
  return (
    <Center alignItems="center" h="5/6">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="3" space={2.5}>
            <Input placeholder="username" type="text" />
            <Input placeholder="email" type="email" />
            <Input placeholder="password" type="password" />
            <Input placeholder="confirm password" type="password" />
          </Stack>
        </FormControl>
      </Box>
      <Box>
        <Stack mx="3">
          <Button size="sm" variant="outline">
            Submit
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
