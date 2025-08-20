import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement | null>(null);
  const summaryRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const goal = goalRef.current?.value.trim() ?? "";
    const summary = summaryRef.current?.value.trim() ?? "";

    if (!goal) {
      goalRef.current?.focus();
      return;
    }

    onAddGoal(goal, summary);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summaryRef} />
      </p>
      <p>
        <button type="submit">Add goal</button>
      </p>
    </form>
  );
}
