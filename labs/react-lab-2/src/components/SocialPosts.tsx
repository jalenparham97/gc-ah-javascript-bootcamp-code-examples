import { useState } from 'react';
import { Post } from '../types';
import { FiX } from 'react-icons/fi';
import { IconX } from '@tabler/icons';
import Modal from 'react-modal';
import PostForm from './PostForm';
import PostInList from './PostInList';
import './SocialPosts.css';

const customStyles = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    padding: '50px',
    background: '#79c5e8',
    border: '2px solid black',
  },
};

Modal.setAppElement('#root');

function SocialPosts() {
  const [showForm, setShowForm] = useState(false);
  const [postList, setPostList] = useState<Post[]>([]);

  function handleSubmit(post: Post) {
    setPostList([post, ...postList]);
    closeModal();
  }

  function handleDeletePostItem(id: string) {
    setPostList(postList.filter((post) => post.id !== id));
  }

  function closeModal() {
    setShowForm(false);
  }

  return (
    <div className="social-posts">
      <h1 className="title">My Thoughts</h1>
      <button className="new-thought-button" onClick={() => setShowForm(true)}>
        New Thought
      </button>
      <Modal
        isOpen={showForm}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Post Form Modal"
      >
        <IconX size={25} className="close-button" onClick={closeModal} />
        {/* <FiX size={25} className="close-button" onClick={closeModal} /> */}
        <PostForm onSubmit={handleSubmit} />
      </Modal>
      <div className="post-list">
        {postList.map((post) => (
          <div className="post-item" key={post.id}>
            <PostInList postItem={post} onDelete={handleDeletePostItem} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialPosts;
