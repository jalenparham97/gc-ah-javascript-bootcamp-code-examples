interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Card({ children, title }: Props) {
  return (
    <div style={{ padding: 20, border: '1px solid #eee' }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
