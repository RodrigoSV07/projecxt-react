
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className="w-full max-w-280 mx-auto my-8 mb-8  p-3 grid  grid-cols-[256px_1fr] gap-8 items-start">
        <Sidebar />
        <main>
          <Post/>
         
        </main>
      </div>
    </div>
  );
}
