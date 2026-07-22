function GlassInput({
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        h-12
        w-full

        rounded-[14px]

        border
        border-white/[0.08]

        bg-white/[0.025]

        px-4

        font-mono
        text-[13px]
        text-white

        placeholder:text-white/35

        shadow-[0_8px_24px_rgba(0,0,0,.30)]

        outline-none

        transition-[border-color,background-color,box-shadow]
        duration-300
        ease-out

        focus:border-white/[0.16]
        focus:bg-white/[0.035]
        focus:shadow-[0_10px_28px_rgba(0,0,0,.36)]

        ${className}
      `}
      {...props}
    />
  );
}

export default GlassInput;