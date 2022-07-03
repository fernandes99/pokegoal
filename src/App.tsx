import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux";
import { RootState } from "./store";

// Components
import { Loading } from "./components/loading";

// Pages
import { AuthPage } from "./pages/auth";
import { HomePage } from "./pages/home";
import { ExplorePage } from "./pages/explore";
import { PokedexPage } from "./pages/pokedex";

function App() {
  const global = useSelector((state: RootState) => state.global);

  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/entrar' element={<AuthPage />} />
            <Route path='/explorar' element={<ExplorePage />} />
            <Route path='/pokedex' element={<PokedexPage />} />
        </Routes>
      </Router>

      { global.loading && <Loading></Loading> }
    </>
  );
}

export default App;
