import { useState } from "react";
import "./App.scss";
import { Text, Button, useColorMode, Heading, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher, RecsForm } from "./components";

const App: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <ColorModeSwitcher />
      <VStack spacing="5px">
        <Heading as="h1" size="2xl">
          RECS
        </Heading>
        <Text>ASK OTHER PEOPLE TO RECOMMEND YOU MOVIES</Text>
      </VStack>
      <RecsForm />
    </>
  );
};

export default App;
