import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx'; // Import the Layout component
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import SOS from './components/SOS/SOS.jsx';
import FirstAid from './components/FirstAid/FirstAid.jsx';
import Hospitals from './components/Hospitals/Hospitals.jsx';
import SignUp from './components/SingUp/SignUp.jsx'; // Corrected the import for SignUp
import Login from './components/Login/Login.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sos" element={<SOS />} />
          <Route path="/first-aid" element={<FirstAid />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

