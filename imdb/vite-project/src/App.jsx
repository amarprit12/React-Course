import React from "react";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import WatchList from "./Components/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Components/Banner";

function App() {
  // return <h1 className="text-xl font-bold underline">Hello world!</h1>;
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
