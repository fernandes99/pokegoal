import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux";

import { Loading } from "./components/loading";
import { AuthPage } from "./pages/auth";
import { RootState } from "./store";
import { HomePage } from "./pages/home";

function App() {
  const global = useSelector((state: RootState) => state.global);

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/entrar' element={<AuthPage />} />
        </Routes>
      </Router>

      { global.loading
        ? <Loading></Loading>
        : null
      }
    </>
  );
}

export default App;
