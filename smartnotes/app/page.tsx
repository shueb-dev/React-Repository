import { deleteNote } from "@/utils/actions";
import { API_URL } from "@/utils/Constants";
import { Notes } from "@/utils/types";

async function Home() {
  const response = await fetch(API_URL);
  const notes: Notes[] = await response.json();
  return (
    <div className="max-w-4xl m-8 ">
      <h1 className="text-3xl font-bold mb-4">My Notes</h1>
      <ul>
        {notes.map((notes) => (
          <div
            className="card w-96 bg-amber-100 card-md shadow-sm mb-4 text-base-100"
            key={notes.id}
          >
            <div className="card-body">
              <h2 className="card-title">{notes.title}</h2>
              <p>{notes.description}</p>
              <div className="justify-end card-actions">
                <form action={deleteNote}>
                  <input type="hidden" name="id" value={notes.id} />
                  <button className="btn btn-primary">Delete</button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;
