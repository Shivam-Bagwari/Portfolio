function Container({ children, className = "" }) {
    return (
        <div
            className={`
                relative
                mx-auto
                w-full
                max-w-4xl
                px-6
                ${className}
            `}
        >
            {children}
        </div>
    );
}

export default Container;