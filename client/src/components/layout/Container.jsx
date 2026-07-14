function Container({ children, className = "" }) {
    return (
        <div
            className={`
                relative
                mx-auto
                w-full
                max-w-4xl
                px-8
                lg:px-10
                ${className}
            `}
        >
            {children}
        </div>
    );
}

export default Container;