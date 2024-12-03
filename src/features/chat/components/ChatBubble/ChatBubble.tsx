import {useState, useEffect, useLayoutEffect} from 'react';
import { MotionStyle } from 'framer-motion';

export interface ChatBubbleProps {
  userID: string
  isCurrentlyTyping: boolean
  reactions: Reaction[]
  content: string
  type: ChatBubbleType
}

export interface NameTagChatBubbleProps extends ChatBubbleProps {
  
}
export interface QuizChatBubbleProps extends ChatBubbleProps {

}
export interface MultipleChoiceChatBubbleProps extends ChatBubbleProps {

}
export interface FreeResponseChatBubbleProps extends ChatBubbleProps {

}
export interface WordBankChatBubbleProps extends ChatBubbleProps {

}
export interface BankChatBubbleProps extends ChatBubbleProps {

}
export interface PreviewBubbleProps extends ChatBubbleProps {

}

export interface Reaction {
  emoji: string
  animation: MotionStyle
  type: ReactionType

}

export enum ReactionType {
  screen = "SCREEN",
  bubble = "BUBBLE",
}


export enum ChatBubbleType {
  default = "DEFAULT",
  quiz = "QUIZ",
  review = "REVIEW",
  nametag = "NAMETAG",
  preview = "PREVIEW",
  setting = "SETTING",
  character = "CHARACTER",
  preview = "PREVIEW",
}

export enum ChatBubbleContentType {
  default = "DEFAULT"
}

export const ChatBubble = ({isCurrentlyTyping,reactions,content,type}: ChatBubbleProps): ReactElement => {
  return (
    <>
      <Group>
        {content}
      </Group>
    </>
  )
}

export default ChatBubble
