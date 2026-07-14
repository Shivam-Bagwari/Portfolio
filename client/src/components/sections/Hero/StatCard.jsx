import GlassCard from "../../ui/GlassCard";

function StatCard({ value, label }) {
  return (
    <GlassCard
      className="
        h-[130px]
        p-8
        flex
        flex-col
        justify-end
      "
    >
      <h3
        className="
          text-[2.2rem]
          font-black
          leading-none
          tracking-tight
          text-white
        "
      >
        {value}
      </h3>

      <p
        className="
          mt-4
          font-mono
          text-[10px]
          uppercase
          tracking-[0.28em]
          text-white/35
        "
      >
        {label}
      </p>
    </GlassCard>
  );
}

export default StatCard;