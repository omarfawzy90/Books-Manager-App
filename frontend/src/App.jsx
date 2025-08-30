import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateBooks from "./pages/CreateBooks.jsx";
import DeleteBooks from "./pages/DeleteBooks.jsx";
import EditBooks from "./pages/EditBooks.jsx";
import ShowBooks from "./pages/Showbooks.jsx";
import Background from "./components/Background.jsx";

function App() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/details/:id" element={<ShowBooks />} />
        <Route path="/books/create" element={<CreateBooks />}></Route>
        <Route path="/books/edit/:id" element={<EditBooks />}></Route>
        <Route path="/books/delete/:id" element={<DeleteBooks />}></Route>
      </Routes>
    </Background>
  );
}

export default App;

{
  /*  />
<Route path="/books/delte/:id" element={<DeleteBooks />} />
 <Route path="/books/create" element={<CreateBooks />} /> */
}
