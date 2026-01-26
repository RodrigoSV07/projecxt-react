import { Header } from "./components/Header";
import { Post, type PostData } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts: PostData [] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/108432234?v=4",
      name: "Rodrigo Sales Veloso",
      role: "Web Developer at SuryaMKT",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare👋",
      },
      { type: "link", content: "Fjane.design/doctorcare" },
    ],
    publishedAt: new Date("2026-01-26 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className="w-full max-w-280 mx-auto my-8 mb-8  p-3 grid  grid-cols-[256px_1fr] gap-8 items-start max-md:grid-cols-1 ">
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
