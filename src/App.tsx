import { Header } from "./components/header";
import { Post } from "./components/Post";

export function App() {
  return (
    <div>
      <Header/>
      
      <Post 
      author="Rodrigo Sales" 
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda magnam quod nesciunt perspiciatis voluptatibus? Nemo, vero eligendi ratione necessitatibus dolores exercitationem? Labore qui dolorum voluptas natus excepturi fuga, amet voluptatum."
      />
    </div>
  );
}
