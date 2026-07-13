function StatCard({ value, label }) {
  return (
    <div
      className="
        glass
        rounded-3xl
        border
        border-white/10
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-accent/40
      "
    >
      <h3 className="text-4xl font-black text-white">
        {value}
      </h3>

      <p
        className="
          mt-3
          text-xs
          uppercase
          tracking-[0.25em]
          text-white/50
        "
      >
        {label}
      </p>
    </div>
  );
}

export default StatCard;