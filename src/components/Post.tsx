import { Comment } from "./comment";

export function Post() {
  return (
    <article className="bg-gray-800 rounded-lg p-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/108432234?v=4"
            alt=""
            className="w-12 h-12 border border-green-400 rounded-md"
          />
          <div className="flex flex-col">
            <strong className="text-gray-100">Rodrigo Sales</strong>
            <span className="text-sm text-gray-400">Web Developer</span>
          </div>
        </div>

        <time dateTime="" className="text-sm text-gra">
          Publicado há 1h
        </time>
      </header>

      <div className="text-gray-300 leading-8 mt-4">
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          {" "}
          <a href="" className="text-green-500 decoration-0">
            {" "}
            👉 jane.design/doctorcare
          </a>
        </p>
        <p>
          {" "}
          <a href="" className="text-green-500 decoration-0">
            {" "}
            #novoprojeto #nlw #rocketseat
          </a>
        </p>
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
