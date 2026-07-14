import heroBanner from "../../../assets/images/hero-banner.jpg";

function HeroBanner() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/8
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-2xl"
    >
      <img
        src={heroBanner}
        alt="Hero Banner"
        className="h-[300px] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/55" />
      <div
  className="
    absolute
    inset-x-0
    bottom-0
    h-28
    bg-gradient-to-t
    from-black/80
    to-transparent
  "
/>


    </div>

    
  );
}

export default HeroBanner;