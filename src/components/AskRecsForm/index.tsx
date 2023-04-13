import React, { useState } from "react";
import "./styles.scss";
import { AskRecsType } from "../../types";
import {
  Text,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

interface IAskRecsFormProps {
  addAskRec: (rec: AskRecsType) => void;
  closeModal: () => void;
}

const AskRecsForm: React.FC<IAskRecsFormProps> = ({ addAskRec, closeModal }) => {
  const [rec, setRec] = useState<AskRecsType>({ id: "", brief: "" });
  return (
    <form
      className="AskRecsForm"
      onSubmit={(e) => {
        e.preventDefault();
        addAskRec(rec);
        closeModal();
      }}
    >
      <FormControl isRequired mb="15px">
        <FormLabel htmlFor="moodDesciption" textAlign="center">
          Explain what mood you are in and what you want to watch.
        </FormLabel>
        <Textarea
          id="moodDesciption"
          name="moodDesciption"
          placeholder="I feel bored so I want a movie with a lot of action. I loved john wick."
          onChange={(e) =>
            setRec({ id: e.target.value, brief: e.target.value })
          }
        />
        <FormHelperText>Give us a brief description</FormHelperText>
      </FormControl>
      <Button
        type="submit"
        size="md"
        variant="outline"
        colorScheme="teal"
        minW="120px"
      >
        ASK
      </Button>
    </form>
  );
};

export default AskRecsForm;
