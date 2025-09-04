import { ProgressCircle } from "@chakra-ui/react";

export default function TimerProgress({ progressValue }: { progressValue: number }) {
  return (
    <>
      <ProgressCircle.Root value={progressValue} size="xl">
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range stroke="cyan.500" />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
    </>
  );
}