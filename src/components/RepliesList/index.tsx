import React from "react";
import { ReplyType } from "../../types";
import { VStack, Skeleton, Center } from "@chakra-ui/react";
import Reply from "../Reply";

interface IRepliesListProps {
  replies: ReplyType[];
  loading: boolean;
}

const RepliesList: React.FC<IRepliesListProps> = ({ replies, loading }) => {
  return (
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
  );
};

export default RepliesList;
