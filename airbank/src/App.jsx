import Header from "./components/header.jsx";
import Home from "./pages/home.jsx";
import { useNavigate, Route, Routes } from 'react-router-dom';
import {NextUIProvider} from '@nextui-org/react';
import Deposit from "./pages/Deposit.jsx";
import Withdraw from "./pages/Withdraw.jsx";




function App() {
  const navigate = useNavigate();

  return (
    <> 
        <NextUIProvider navigate={navigate}>
        <Header />
        <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/deposit" element={<Deposit />}  />
        <Route path="/withdraw" element={<Withdraw />}  />
      </Routes>
        </NextUIProvider>
    </>
  )
}

export default App
