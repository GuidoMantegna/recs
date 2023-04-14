import { useState } from "react";
import "./App.scss";
import {
  Text,
  Button,
  Heading,
  VStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  Center,
  Skeleton,
} from "@chakra-ui/react";
import { ColorModeSwitcher, Recs, AskRecsForm } from "./components";
import { AskRecsType } from "./types";

const App: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [recs, setRecs] = useState<AskRecsType[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  const addAskRec = (rec: AskRecsType) => {
    setLoading(true)
    setRecs([...recs, rec]);
    setTimeout(() => setLoading(false), 1500)
  };
  return (
    <>
      <ColorModeSwitcher />
      <VStack spacing="5px">
        <Heading as="h1" size="2xl">
          RECS
        </Heading>
        <Text>ASK OTHER PEOPLE TO RECOMMEND YOU MOVIES</Text>
      </VStack>
      <Button size="lg" variant="outline" m="15px 0" onClick={onOpen}>
        ASK FOR A RECOMMENDATION
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="95vw">
          <ModalCloseButton />
          <AskRecsForm addAskRec={addAskRec} closeModal={onClose} />
        </ModalContent>
      </Modal>
      <VStack>
        {recs.map((rec, index) => {
          return (
            <Skeleton isLoaded={index + 1 < recs.length ? true : !loading} w="100%">

            <Center key={index} w="100%" borderRadius='10px'>
              <Recs recBrief={rec.brief} recNumber={index + 1}/>
            </Center>
            </Skeleton>
          );
        })}
      </VStack>
    </>
  );
};

export default App;
