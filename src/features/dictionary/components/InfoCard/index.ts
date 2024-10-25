import { ReactElement, FC } from "react"
import { IconHeart } from "@tabler/icons-react"
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
} from "@mantine/core"

type Definition = {
  definition: string
  example?: string
}
type Meaning = {
  partOfSpeech: string
  definitions: Definition[]
}
interface DefinitionProps {
  word: string
  phonetic?: string
  meanings: Meaning[]
}

const Definition = ({
  word,
  phonetic,
  meanings,
}: DefinitionProps): ReactElement => {
  return null
  // return (
  //   <div>
  //     <div className='mb-6'>
  //       <h2 className='text-3xl font-bold text-gray-800'>{word}</h2>
  //       {phonetic && <p className='text-gray-600 text-lg'>{phonetic}</p>}
  //     </div>

  //     <div className='space-y-6'>
  //       {meanings.map((meaning, index) => (
  //         <div key={index}>
  //           <h3 className='text-xl font-semibold text-gray-700 mb-3'>
  //             {meaning.partOfSpeech}
  //           </h3>
  //           <ul className='space-y-4'>
  //             {meaning.definitions.map((def, defIndex) => (
  //               <li key={defIndex} className='text-gray-600'>
  //                 <p className='mb-1'>{def.definition}</p>
  //                 {def.example && (
  //                   <p className='text-gray-500 italic'>"{def.example}"</p>
  //                 )}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // )
}

export default Definition
