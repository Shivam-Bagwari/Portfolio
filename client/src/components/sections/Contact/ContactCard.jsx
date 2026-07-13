function ContactCard() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
      "
    >
      <h3 className="text-2xl font-bold text-white">
        Let's Connect
      </h3>

      <p className="mt-4 text-white/60 leading-7">
        Whether it's a project, internship, collaboration,
        or just saying hello—my inbox is always open.
      </p>

      <div className="mt-8 space-y-4">

        <p className="text-white/70">
          📍 India
        </p>

        <p className="text-white/70">
          ✉️ shivambagwari@gmail.com
        </p>

        <p className="text-green-400">
          ● Available for work
        </p>

      </div>
    </div>
  );
}

export default ContactCard;