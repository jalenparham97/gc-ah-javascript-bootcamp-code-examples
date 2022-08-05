import axios from 'axios';
import { config } from '../config';
import { Post } from '../types';

export function fetchAllPosts() {
  return axios
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      // console.log(response);
      // console.log(response.data);
      return response;
    });
  // return axios
  //   .get<Post[]>(
  //     `https://jsonplaceholder.typicode.com/posts?apiKey=${config.apiKey}&otherQuery=kdnvjwdv}`,
  //     {
  //       params: {
  //         apiKey: config.apiKey,
  //         otherQuery: 'ojbdvsjv',
  //         anotherQuery: 'kdsnviwjdv',
  //       },
  //       headers: {
  //         'X-API-KEY': config.apiKey,
  //       },
  //     }
  //   )
  //   .then((response) => response);
}

export function fetchPostById(id: string) {
  return axios
    .get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}?year=2022`, {
      params: {
        year: 2022,
      },
    })
    .then((response) => response);
}

export function updatePostById(id: string) {
  const updateData = {
    title: `Updated title for post ${id}`,
    body: 'Updated body Yay',
  };
  return axios
    .patch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`, updateData)
    .then((response) => response);
}
