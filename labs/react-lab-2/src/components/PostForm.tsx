import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Post } from '../types';
import './PostForm.css';

interface PostFormProps {
  onSubmit: (post: Post) => void;
}

export default function PostForm({ onSubmit }: PostFormProps) {
  const [post, setPost] = useState<Post>({
    id: '',
    title: '',
    thought: '',
  });

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setPost({ ...post, title: e.target.value });
  }

  function handleThoughtChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    return setPost({ ...post, thought: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit({ ...post, id: nanoid() });
    clearFormValues();
  }

  function clearFormValues() {
    setPost({ id: '', title: '', thought: '' });
  }

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <div className="input title-input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          className="title-input"
          type="text"
          value={post.title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="input thought-input-container">
        <label htmlFor="thought">Thought</label>
        <textarea
          id="thought"
          className="thought-input"
          value={post.thought}
          onChange={handleThoughtChange}
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
}
