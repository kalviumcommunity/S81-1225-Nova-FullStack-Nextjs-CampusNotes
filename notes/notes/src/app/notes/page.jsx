app / notes / page.jsx;

export const revalidate = 60;

export default async function NotesPage() {
  const res = await fetch("https://api.example.com/notes");
  const notes = await res.json();

  return notes.map((n) => <p key={n.id}>{n.title}</p>);
}
