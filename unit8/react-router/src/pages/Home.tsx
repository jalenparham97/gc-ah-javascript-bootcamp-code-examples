import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  function goToAboutPage() {
    navigate('/about');
  }

  function onSubmitUser() {
    //... submit some data here
    navigate('/users');
  }

  return (
    <div>
      <h1>This is the home page</h1>
      <button onClick={goToAboutPage}>Learn more</button>
    </div>
  );
}
