function Container({ children, className = "" }) {
    return (
        <div
            className={`
                relative
                mx-auto
                w-full
                max-w-5xl
                px-6
                ${className}
            `}
        >
            {children}
        </div>
    );
}

export default Container;