
import NavBar from '../Components/NavBar/NavBar';
import ProjectList from '../Components/ProjectList/ProjectList';
import Provider from '../context/ThemeContext';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <Provider>
      <NavBar />
      <ProjectList />
      <ToastContainer />
    </Provider>

  );
}
