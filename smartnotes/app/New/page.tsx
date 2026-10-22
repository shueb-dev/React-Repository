import { addNote } from "@/utils/actions";
import React from "react";

function New() {
  return (
    <div>
      <h2 className="m-6 text-amber-300 font-bold">Write Your Notes Here </h2>
      <form
        action={addNote}
        className="max-2xl flex flex-col gap-4 w-70 m-8 bg-amber-50 p-4 rounded-xl"
      >
        <fieldset className="fieldset">
          <input
            type="text"
            id="title"
            name="title"
            className="input"
            placeholder="Title"
          />
        </fieldset>
        <textarea
          className="textarea"
          name="description"
          placeholder="description"
        ></textarea>

        <button className="btn btn-accent">Add Note</button>
      </form>
    </div>
  );
}

export default New;
