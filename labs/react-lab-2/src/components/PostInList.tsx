import { IconTrash } from '@tabler/icons';
import { Post } from '../types';

interface Props {
  postItem: Post;
  onDelete: (id: string) => void;
}

export default function PostInList({ postItem, onDelete }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 30,
      }}
    >
      <div>
        <h2>{postItem.title}</h2>
        <p style={{ marginTop: 10 }}>{postItem.thought}</p>
      </div>
      <IconTrash
        size={25}
        className="close-button"
        onClick={() => onDelete(postItem.id)}
      />
      {/* <button onClick={() => onDelete(postItem.id)}>Delete</button> */}
    </div>
  );
}
