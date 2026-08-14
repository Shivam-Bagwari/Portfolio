import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import BlogsComingSoon from "./pages/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Layout>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/blogs"
            element={<BlogsComingSoon />}
          />

        </Routes>

      </Layout>
    </BrowserRouter>
  );
}

export default App;