import React, { useState } from "react";
import "./styles.scss";
import { RecsType } from "../../types";
import {
  Text,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
} from "@chakra-ui/react";

interface IRecsFormProps {
  addRec: (rec: RecsType) => void;
  toggle: () => void;
}

const RecsForm: React.FC <IRecsFormProps> = (
  {
    toggle,
    addRec
  }
) => {
  const [rec, setRec] = useState<RecsType>({ id: "", link: "", brief: "" });
  return (
    <form
      className="RecsForm"
      onSubmit={(e) => {
        e.preventDefault();
        addRec(rec);
        toggle()
        // closeModal();
      }}
    >
      <Text mb="15px">GIVE A RECOMMENDATION</Text>
      <FormControl isRequired mb="15px">
        <FormLabel htmlFor="YouTubeLink" textAlign="center">
          Paste a YouTube link to the movie trailer
        </FormLabel>
        <Input
          id="YouTubeLink"
          name="YouTubeLink"
          placeholder="YouTube"
          onChange={(e) =>
            setRec({ ...rec, link: e.target.value, id: e.target.value })
          }
        />
      </FormControl>
      <FormControl isRequired mb="15px">
        <FormLabel htmlFor="recBrief" textAlign="center">
          Explain why you are recommending this movie
        </FormLabel>
        <Textarea
          id="recBrief"
          name="recBrief"
          placeholder="You should watch this movie because..."
          onChange={(e) =>
            setRec({ ...rec, brief: e.target.value })
          }
        />
      </FormControl>
      <Button
        type="submit"
        size="md"
        variant="outline"
        colorScheme="teal"
        minW="120px"
      >
        REPLY
      </Button>
    </form>
  );
};

export default RecsForm;
