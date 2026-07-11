function VerticalRails() {
    return (
        <div
            className="
                pointer-events-none
                fixed
                inset-0
                -z-10
            "
        >
            <div
                className="
                    absolute
                    left-1/2
                    top-0
                    h-full
                    w-px
                    border-l
                    border-dashed
                    border-white/10
                    -translate-x-[32rem]
                "
            />

            <div
                className="
                    absolute
                    left-1/2
                    top-0
                    h-full
                    w-px
                    border-l
                    border-dashed
                    border-white/10
                    translate-x-[32rem]
                "
            />
        </div>
    );
}

export default VerticalRails;