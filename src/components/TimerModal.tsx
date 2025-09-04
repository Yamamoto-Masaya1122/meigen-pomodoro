import { Dialog, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function TimerModal({ isDialogOpen, setIsDialogOpen }: { isDialogOpen: boolean, setIsDialogOpen: (isDialogOpen: boolean) => void }) {
  const navigate = useNavigate();
  const handleBackToTop = () => {
    navigate("/");
  };
  return (
    <>
      <Dialog.Root open={isDialogOpen}>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger />
            <Dialog.Header>
              <Dialog.Title>
                お疲れさまでした！5分休憩に入りましょう ☕
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Footer>
              <Button colorScheme="cyan" onClick={() => setIsDialogOpen(false)}>
                OK
              </Button>
              <Button colorScheme="cyan" onClick={handleBackToTop}>
                トップ画面に戻る
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  );
}