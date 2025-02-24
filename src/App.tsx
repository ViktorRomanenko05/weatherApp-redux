import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import History from "./pages/History/History";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/history" element={<History />}/>
              <Route path='*' element={<NotFound />}/>
          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
