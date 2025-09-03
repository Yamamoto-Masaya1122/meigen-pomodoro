import { Button } from "@chakra-ui/react"
import "./Top.css"

export default function Top() {
  return (
    <>
      <div className="container">
        <h1>MEI-POMO</h1>
        <p>著名人が残した名言を見て気持ちを高めることができるポモドーロタイマーです</p>
        <Button bg="cyan.500" _hover={{ bg: "cyan.600" }} size="xl">はじめる</Button>
      </div>
    </>
  )
}