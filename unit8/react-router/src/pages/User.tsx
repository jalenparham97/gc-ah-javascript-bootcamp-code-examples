import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const users = [
  { id: '1', name: 'Jalen' },
  { id: '2', name: 'Briana' },
];

const defaultUser = { id: '', name: '' };

export default function User() {
  const { id } = useParams(); // Followed by the slash - /:id
  const [searchParams] = useSearchParams(); // Followed by the question mark - /user?name=Jalen

  const user = users.find((user) => user.id === id);
  // const [user, setUser] = useState(defaultUser);

  // useEffect(() => {
  //   setUser(users.find((user) => user.id === id) ?? defaultUser);
  // }, [id]);

  // console.log(id);

  console.log(searchParams.get('name'));
  console.log(searchParams.get('id'));

  return (
    <div>
      <h1>User - {user?.name}</h1>
    </div>
  );
}
