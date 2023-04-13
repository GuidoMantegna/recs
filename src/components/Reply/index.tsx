import { Button, Heading, Text, VStack, Skeleton, Center, AspectRatio } from "@chakra-ui/react";
import React, { useState } from "react";
import RecsForm from "../RecsForm";
import { RecsType } from "../../types";

interface IReplyProps {
  recNumber: number;
  recBrief: string;
  link: string
}

const Reply: React.FC<IReplyProps> = ({ recBrief, recNumber, link }) => {
  const [giveARec, toggle] = useState<boolean>(false);
  const [recs, addRecs] = useState<RecsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const addRec = (rec: RecsType) => {
    setLoading(true);
    addRecs([...recs, rec]);
    setTimeout(() => setLoading(false), 1500);
  };
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
        REPLY # {recNumber}
      </Heading>
      <AspectRatio maxW={{base: "450px", md: "initial"}} w={{base: "95%", md: "100%"}} ratio={{base: 1, lg: 16/9}}>
        <iframe
            title="naruto"
            src={link}
            allowFullScreen
        />
        </AspectRatio>
      <Text>"{recBrief}"</Text>
      
    </VStack>
  );
};

export default Reply;
