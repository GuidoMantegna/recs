import React from "react";
import './styles.scss'
import {
  Text,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

const RecsForm: React.FC = () => {
  return (
    <form className="RecsForm">
      <FormControl isRequired mb="15px">
        <FormLabel htmlFor="moodDesciption" textAlign="center">
          Explain what mood you are in and what you want to watch.
        </FormLabel>
        <Textarea
          id="moodDesciption"
          name="moodDesciption"
          placeholder="I feel bored so I want a movie with a lot of action. I loved john wick."
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

export default RecsForm;
