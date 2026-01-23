import { Pencil } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="rounded-lg overflow-hidden bg-gray-800">
      <img
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="dev"
        className="object-cover w-full h-20"
      />

      <div className="flex flex-col items-center -mt-8  mb-8">
        <img
          src="https://avatars.githubusercontent.com/u/108432234?v=4"
          alt="avatar"
          className="w-12 h-12 border border-green-400 rounded-md"
        />

        <strong className="mt-4 leading-3.5">Rodrigo Sales</strong>
        <span className="text-sm text-gray-400">Web Developer</span>
      </div>

      <footer className="border-t border-gray-500 mt-1 px-6 py-8 flex items-center justify-center  ">
        <a
          href="#"
          className="w-full bg-transparent border border-green-500 flex justify-center items-center gap-2.5 text-green-500 rounded-lg py-4 px-6 h-12 transition hover:bg-green-500 hover:text-white"
        >
          <Pencil className="size-5" />
        <span>Editar seu perfil</span>  
        </a>
      </footer>
    </aside>
  );
}
