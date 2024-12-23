import { Route, Routes, Navigate } from "react-router-dom";
import React from 'react'
import { NewNote } from "./components/NewNote";


function App() {
  return (
    <div className="container mx-auto my-auto">
      <Routes>
        <Route path="/" element={<div className="text-center text-2xl rounded-3xl mx-8 my-4 bg-cyan-200 font-bold text-slate-800 p-1">
            Delta Blog
          </div>} />

        <Route path="/new" element={<NewNote />} />

        <Route path="/:id">

        <Route index element={<h1 className="text-center text-2xl rounded-3xl mx-8 my-4 bg-yellow-200 font-bold text-slate-800 p-1">Show</h1>} />
        <Route path="edit" element={<h1 className="text-center text-2xl rounded-3xl mx-8 my-4 bg-orange-200 font-bold text-slate-800 p-1">Edit</h1>} />
        </Route>

        <Route path="*" element={<Navigate to="/" />}></Route>

      </Routes>
    </div>
  );
}

export default App;
