import React, { useState } from "react";
import "./styles.scss";
import { ReplyType } from "../../types";
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

interface IReplyFormProps {
  addRep: (rec: ReplyType) => void;
  toggle: () => void;
}

const ReplyForm: React.FC <IReplyFormProps> = (
  {
    toggle,
    addRep
  }
) => {
  const [reply, setReply] = useState<ReplyType>({ id: "", link: "", brief: "" });
  return (
    <form
      className="ReplyForm"
      onSubmit={(e) => {
        e.preventDefault();
        addRep(reply);
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
            setReply({ ...reply, link: e.target.value, id: e.target.value })
          }
        />
      </FormControl>
      <FormControl isRequired mb="15px">
        <FormLabel htmlFor="repBrief" textAlign="center">
          Explain why you are recommending this movie
        </FormLabel>
        <Textarea
          id="repBrief"
          name="repBrief"
          placeholder="You should watch this movie because..."
          onChange={(e) =>
            setReply({ ...reply, brief: e.target.value })
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

export default ReplyForm;
