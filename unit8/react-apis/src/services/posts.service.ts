import axios from 'axios';
import { Post } from '../types';

export function fetchAllPosts() {
  return axios
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response);
}

export function fetchPostById(id: string) {
  return axios
    .get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      params: {
        year: 2022,
      },
    })
    .then((response) => response);
}

export function updatePostById(id: string) {
  const updateData = {
    title: `Updated title for post ${id}`,
  };
  return axios
    .patch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`, updateData)
    .then((response) => response);
}
