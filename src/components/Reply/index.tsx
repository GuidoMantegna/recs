import {
  Heading,
  Text,
  VStack,
  AspectRatio,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface IReplyProps {
  repNumber: number;
  repBrief: string;
  link: string;
}

const Reply: React.FC<IReplyProps> = ({ repBrief, repNumber, link }) => {
  return (
    <VStack
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="gray.200"
      p="15px"
      m="15px 0"
      spacing="25px"
      w="100%"
    >
      <Heading as="h2" size="md">
        REPLY # {repNumber}
      </Heading>
      <AspectRatio
        maxW={{ base: "450px", md: "initial" }}
        w={{ base: "95%", md: "100%" }}
        ratio={{ base: 1, lg: 16 / 9 }}
      >
        <iframe title="naruto" src={link} allowFullScreen />
      </AspectRatio>
      <Text>"{repBrief}"</Text>
    </VStack>
  );
};

export default Reply;
