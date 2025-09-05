import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Top.css"

export default function Top() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <h1>MEI-POMO</h1>
        <p>著名人が残した名言によってやる気を高めるポモドーロタイマーです</p>
        <Button onClick={() => navigate("/timer")} bg="gray.500" _hover={{ bg: "gray.600" }} size="xl">
          はじめる <FaArrowRightLong />
        </Button>
      </div>
    </>
  )
}