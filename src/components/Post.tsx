import { format, formatDistanceToNow } from 'date-fns'; 
import { Avatar } from "./Avatar";
import { Comment } from "./comment";
import { ptBR } from 'date-fns/locale';

export interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

export interface PostContent {
  type: "paragraph" | "link";
  content: string;
}


export interface PostData {
  id: number;
  author: Author;
  content: PostContent[];
  publishedAt: Date;
}


export function Post({ author, content, publishedAt}: PostData){
  const  publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  return (
    <article className="bg-gray-800 rounded-lg p-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src="https://avatars.githubusercontent.com/u/108432234?v=4"/>
          <div className="flex flex-col">
            <strong className="text-gray-100">{author.name}</strong>
            <span className="text-sm text-gray-400">{author.role}</span>
          </div>
        </div>

        <time title= {publishedDateFormated} dateTime="" className="text-sm text-gra">
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="text-gray-300 leading-8 mt-4">
       {content.map(line => {
        if (line.type === 'paragraph') {
          return <p>{line.content}</p>;
        }else if(line.type === 'link') {
          return <p><a href="#" className='text-green-500'>{line.content}</a></p>;
        }
       }

       )}
      </div>

      <form className="group w-full flex flex-col mt-5 pt-4 border-t border-gray-700">
        <strong className="text-gray-100">Deixe um comentário</strong>

        <textarea
          placeholder="Deixe um comentário"
          className="py-3 px-3 bg-gray-900 rounded-md border-0 mt-4 resize-none h-24 text-gray-100 outline-none"
        />

        <footer
          className="invisible max-h-0 overflow-hidden
               group-focus-within:visible
               group-focus-within:max-h-40
               transition-all duration-200"
        >
          <button
            type="submit"
            className="py-4 px-6 bg-green-500 mt-4 rounded-md font-bold text-gray-100 cursor-pointer transition hover:bg-green-400"
          >
            Publicar
          </button>
        </footer>
      </form>

      <div>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
