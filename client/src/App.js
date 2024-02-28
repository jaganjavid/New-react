import './App.css';
import Layout from './components/Layout';
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
     <Routes>
       <Route path='/' element={<Layout/>}>
        <Route index element={
            <Homepage/>
        }/>
        <Route path='/login' element={
            <Loginpage/>
        }/>
        <Route path='/register' element={
            <Registerpage/>
        }/>
       </Route>
     </Routes>
  );
}

export default App;
