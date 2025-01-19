import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/history" element={<History />}/>
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
