function IconButton({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white">

            {children}
        </button>
    );
}

export default IconButton;