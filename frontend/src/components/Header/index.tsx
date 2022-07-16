import logo from '../../assets/img/logo.svg'

export function Header() {


    return (
        <header className="flex  items-center justify-center h-56 bg-gradient-to-r from-[#102347] to-[#181818]">
            <div className="flex flex-col items-center text-zinc-100">
                <img className="w-60" src={logo} alt="" />
                < h1 className="mt-4 text-2xl font-bold " >DSMeta</h1 >
                <p className="text-sm text-zinc-400">Desenvolvido por <a href="#">@LucasPreviato</a></p>
            </div >
        </header >
    )
}