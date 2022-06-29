import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux";

import { Loading } from "./components/loading";
import { AuthPage } from "./pages/auth";
import { RootState } from "./store";

function App() {
  const global = useSelector((state: RootState) => state.global);

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<AuthPage />} />
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
