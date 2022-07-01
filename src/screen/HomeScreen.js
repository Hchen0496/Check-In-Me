import {
  Box,
  Text,
  Button,
  Link,
  FormControl,
  Input,
  HStack,
  AspectRatio,
  Flex,
  Spacer,
  Stack,
  Center,
} from "native-base";

export default function HomeScreen() {
  return (
    <Center alignItems="center" h="5/6">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="3" space={2.5}>
            <FormControl.HelperText alignSelf="center">
              Must login to use the App
            </FormControl.HelperText>
            <Input placeholder="username" type="text" />
            <Input placeholder="password" type="password" />
          </Stack>
        </FormControl>
      </Box>
      <Box>
        <Box flexDirection="row-reverse">
          <Link>FORGOT PASSWORD?</Link>
        </Box>
        <Button size="sm" variant="outline">
          LOGIN
        </Button>
        <HStack>
          <Text>Need to create an account? </Text>
          <Link>REGISTER</Link>
          <Text> here!</Text>
        </HStack>
      </Box>
    </Center>
  );
}
