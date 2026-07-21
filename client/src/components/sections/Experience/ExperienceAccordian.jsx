import { useState } from "react";
import ExperienceRow from "./ExperienceRow";

function ExperienceAccordion({ items }) {

  const [openId, setOpenId] = useState(items[0].id);

  return (
    <div className="space-y-4">

      {items.map((item) => (

        <ExperienceRow
          key={item.id}
          item={item}
          open={openId === item.id}
          onToggle={() =>
            setOpenId(openId === item.id ? null : item.id)
          }
        />

      ))}

    </div>
  );
}

export default ExperienceAccordion;