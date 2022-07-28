interface TodoFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function TodoForm({ value, onChange, onSubmit }: TodoFormProps) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="Enter a todo"
        value={value}
        onChange={onChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
