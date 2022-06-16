import './App.css';
import { Route, Routes } from "react-router-dom";
import UserLogin from './Views/Auth/UserLogin';
import View from './Views/view'

function App() {
  return (
    <>
      <Routes>
              <Route  path="/" element={<UserLogin />} />
              <Route path="/view" element={<View />} />
            </Routes>
      </>
  );
}

export default App;
