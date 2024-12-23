import React from 'react'
import { NoteForm } from './NoteForm';

export function NewNote() {
  return (
    <div className="text-center text-2xl rounded-3xl mx-8 my-4 bg-lime-300 font-bold text-slate-800 p-1">
    New Entry
    <NoteForm />
  </div>
);
}