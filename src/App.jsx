import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  <BrowserRouter>
    <Routes>
      <Route Component={DefaultLayout}>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/posts" Component={PostsPage} />
      </Route>
    </Routes>
  </BrowserRouter>;
}

export default App;
