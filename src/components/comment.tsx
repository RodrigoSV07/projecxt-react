import { ThumbsUp, Trash } from "lucide-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface PostContent {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: PostContent) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(prev => prev + 1)
  }


  return (
    <div className="mt-8 flex gap-4">
      <Avatar src="https://avatars.githubusercontent.com/u/108432234?v=4"/>

      <div className="flex-1">
        <div className="bg-gray-700 rounded-md p-4">
          <header className="flex justify-between items-start">
            <div className="flex flex-col">
              <strong className="text-gray-100 block">Rodrigo Sales</strong>
              <time dateTime="" className="text-sm text-gra block ">
                Cerca de 1h atrás
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="Deletar comment"
              className="bg-transparent leading-0 hover:text-red-600"
            >
              <Trash size={24} />
            </button>
          </header>

          <p className="mt-4 text-gray-300">{content}</p>
        </div>

        <footer className="group mt-4 flex items-start border-0">
          <button onClick={handleLikeComment} className="flex justify-center items-center gap-4 border-0 cursor-pointer ">
            <ThumbsUp size={16}  className="mb-0.5 hover:text-green-400"/>
            Aplaudir{" "}
            <span
              className="before:content-['\2022']"
            >
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  );
}
