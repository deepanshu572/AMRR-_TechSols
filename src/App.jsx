import React from "react";
import { Route, Routes } from "react-router";
import AddItems from "./Pages/AddItems";
import ViewItem from "./Pages/ViewItem";
import ViewItemDetail from "./Pages/ViewItemDetail";

const App = () => {
  return (
    <Routes>
      <Route index element={<AddItems />} />
      <Route path="view" element={<ViewItem />} />
      <Route path="ViewItemDetail/:id" element={<ViewItemDetail />} />
    </Routes>
  );
};

export default App;
