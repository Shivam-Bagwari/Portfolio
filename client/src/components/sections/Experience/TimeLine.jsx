import experience from "../../../data/experience";
import ExperienceItem from "./ExperienceItem";

function Timeline() {
  return (
    <div className="relative space-y-16">

      {/* Vertical Line */}

      <div className="absolute left-[7px] top-2 h-full w-px bg-white/10" />

      {experience.map((item) => (

        <ExperienceItem
          key={item.id}
          year={item.year}
          title={item.title}
          company={item.company}
          description={item.description}
        />

      ))}

    </div>
  );
}

export default Timeline;