import { Button } from "@chakra-ui/react"
import "./Top.css"

export default function Top() {
  return (
    <>
      <section className="section">
        <h1>名言ポモドーロ</h1>
        <Button bg="cyan.500" _hover={{ bg: "cyan.600" }} size="xl">一歩踏みだす</Button>
      </section>
    </>
  )
}