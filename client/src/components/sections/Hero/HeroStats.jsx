import heroStats from "../../../data/heroStats";
import StatCard from "./StatCard";

function HeroStats() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {heroStats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroStats;