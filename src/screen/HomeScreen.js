import {
  Box,
  Text,
  Button,
  Link,
  FormControl,
  Input,
  HStack,
} from "native-base";

export default function HomeScreen() {
  return (
    <Box>
      <Box alignItems="center" height={200}>
        <FormControl isRequired>
          <Input placeholder="username" type="text" />
          <Input placeholder="password" type="password" />
          <FormControl.HelperText>
            Must login to use the App
          </FormControl.HelperText>
        </FormControl>
        <Button size="sm" variant="outline">
          LOGIN
        </Button>
        <Link>FORGOT PASSWORD?</Link>
        <HStack>
          <Text>Need To create an account?</Text>
          <Link>REGISTER</Link>
          <Text>here!</Text>
        </HStack>
      </Box>
    </Box>
  );
}
