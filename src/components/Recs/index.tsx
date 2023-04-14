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

interface IRecsProps {
  recNumber: number;
  recBrief: string;
}

const Recs: React.FC<IRecsProps> = ({ recBrief, recNumber }) => {
  const [giveARec, toggle] = useState<boolean>(false);
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
      <VStack w="40%">
        {replies.map((rep, index) => {
          return (
            <Skeleton
              isLoaded={index + 1 < replies.length ? true : !loading}
              w="100%"
              key={index}
            >
              <Center w="100%" borderRadius="10px">
                <Reply
                  repBrief={rep.brief}
                  repNumber={index + 1}
                  link={rep.link}
                />
              </Center>
            </Skeleton>
          );
        })}
      </VStack>
      {giveARec ? (
        <ReplyForm toggle={() => toggle(!giveARec)} addRep={addRep} />
      ) : (
        <Button
          size="lg"
          variant="outline"
          colorScheme="teal"
          onClick={() => toggle(!giveARec)}
        >
          VIEW/REPLY
        </Button>
      )}
    </VStack>
  );
};

export default Recs;
