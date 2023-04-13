import { Button, Heading, Text, VStack, Skeleton, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import RecsForm from "../RecsForm";
import { RecsType } from "../../types";
import Reply from "../Reply";

interface IRecsProps {
  recNumber: number;
  recBrief: string;
}

const Recs: React.FC<IRecsProps> = ({ recBrief, recNumber }) => {
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
        REQUEST # {recNumber}
      </Heading>
      <Text>"{recBrief}"</Text>
      {giveARec ? (
        <RecsForm toggle={() => toggle(!giveARec)} addRec={addRec}/>
      ) : (
        <>
          <VStack w="40%">
            {recs.map((rec, index) => {
              return (
                <Skeleton isLoaded={index + 1 < recs.length ? true : !loading} w="100%">
    
                <Center key={index} w="100%" borderRadius='10px'>
                  <Reply recBrief={rec.brief} recNumber={index + 1} link={rec.link}/>
                </Center>
                </Skeleton>
              );
            })}
          </VStack>
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
