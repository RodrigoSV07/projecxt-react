



export function Sidebar() {
    return(
        <aside className="rounded-lg overflow-hidden bg-gray-800">
            <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             alt="dev" className="object-cover w-full h-20"/>

             <div className="flex flex-col items-center">
                <strong>Rodrigo Sales</strong>
                <span>Web Dev</span>
             </div>

             <footer className="border-t mt-1 px-6 py-8 flex items-center justify-center">
                <a href="#" className="w-full bg-transparent border border-green-500 flex justify-center items-center text-green-500 rounded-lg py-4 px-6 h-12">Editar seu perfil</a>
             </footer>
        </aside>
    );
}