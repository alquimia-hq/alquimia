export function BackgroundEffects() {
  return (
    <>
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center bg-no-repeat opacity-[0.22] contrast-[1.05] saturate-[0.85]"
        style={{
          backgroundImage: "url('/images/alchemist.png')",
        }}
      />

      {/* Vignette */}
      <div className="fixed inset-0 z-[1] pointer-events-none bg-vignette" />

      {/* Noise */}
      <div className="fixed inset-0 z-[2] pointer-events-none bg-noise" />

      {/* Frame Corners */}
      <div
        className="animate-entrance animate-fade-in fixed inset-5 pointer-events-none z-[3]"
        style={{ "--delay": "0ms" } as React.CSSProperties}
      >
        <span className="absolute top-0 left-0 w-[22px] h-[22px] border border-gold opacity-55 border-r-0 border-b-0" />
        <span className="absolute top-0 right-0 w-[22px] h-[22px] border border-gold opacity-55 border-l-0 border-b-0" />
        <span className="absolute bottom-0 left-0 w-[22px] h-[22px] border border-gold opacity-55 border-r-0 border-t-0" />
        <span className="absolute bottom-0 right-0 w-[22px] h-[22px] border border-gold opacity-55 border-l-0 border-t-0" />
      </div>
    </>
  );
}
