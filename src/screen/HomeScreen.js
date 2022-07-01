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
import React from "react";

export default function HomeScreen({ navigation }) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Center alignItems="center" h="5/6">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="3" space={2.5}>
            <FormControl.HelperText alignSelf="center">
              Must login to use the App
            </FormControl.HelperText>
            <Input placeholder="username" type="text" />
            <Input
              placeholder="password"
              type={show ? "text" : "password"}
              InputRightElement={
                <Button
                  size="s"
                  rounded="none"
                  w="1/6"
                  h="full"
                  onPress={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              }
            />
          </Stack>
        </FormControl>
      </Box>
      <Box>
        <Stack mx="3" space={2.5}>
          <Box flexDirection="row-reverse">
            <Link onPress={() => navigation.navigate("ForgotPassword")}>
              FORGOT PASSWORD?
            </Link>
          </Box>
          <Button size="sm" variant="outline">
            LOGIN
          </Button>
          <HStack>
            <Text>Need to create an account? </Text>
            <Link>REGISTER</Link>
            <Text> here!</Text>
          </HStack>
        </Stack>
      </Box>
    </Center>
  );
}
