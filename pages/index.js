
import NavBar from '../Components/NavBar/NavBar';
import ProjectList from '../Components/ProjectList/ProjectList';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <>
      <NavBar />
      <ProjectList />
      <ToastContainer />
    </>
  );
}
