import {
  Button,
  Heading,
  Text,
  VStack,
  Skeleton,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ReplyForm from "../ReplyForm";
import { ReplyType } from "../../types";
import Reply from "../Reply";
import RepliesList from "../RepliesList";

interface IRecsProps {
  recNumber: number;
  recBrief: string;
}

const Recs: React.FC<IRecsProps> = ({ recBrief, recNumber }) => {
  const [giveARec, toggle] = useState<boolean>(false);
  const [wrapReplies, toggleWrapper] = useState<boolean>(false);
  const [replies, addReplies] = useState<ReplyType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const addRep = (rec: ReplyType) => {
    setLoading(true);
    addReplies([...replies, rec]);
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
        REQUEST # {recNumber}
      </Heading>
      <Text>"{recBrief}"</Text>
      <Button variant='ghost' colorScheme="twitter" onClick={() => toggleWrapper(!wrapReplies)}>{wrapReplies ? 'hide replies 🙈' : 'show replies 🐵'}</Button>
      {giveARec ? (
        <>
          <RepliesList replies={replies} loading={loading} />
          <ReplyForm toggle={() => toggle(!giveARec)} addRep={addRep} />
        </>
      ) : (
        <>
          {wrapReplies && <RepliesList replies={replies} loading={loading} />}
          <Button
            size="lg"
            variant="outline"
            colorScheme="teal"
            onClick={() => toggle(!giveARec)}
          >
            VIEW/REPLY
          </Button>
        </>
      )}
    </VStack>
  );
};

export default Recs;
