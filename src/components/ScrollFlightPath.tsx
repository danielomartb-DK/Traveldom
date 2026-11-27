export function ScrollFlightPath() {
  return (
    <>
      {/* Barra superior de progreso de vuelo ligada al scroll */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent"
      >
        <div className="scroll-flight-bar h-full w-full origin-left bg-gradient-to-r from-[#102D52] via-[#0E9AA7] to-[#C9A66B]" />
      </div>

      {/* Ruta vertical decorativa con avión ligado al scroll en pantallas amplias */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center 2xl:flex"
      >
        <div className="relative h-56 w-6">
          <svg
            viewBox="0 0 24 224"
            className="h-full w-full overflow-visible"
            fill="none"
          >
            <path
              d="M12 4 C 20 60, 4 120, 12 220"
              stroke="#0E9AA7"
              strokeOpacity="0.35"
              strokeWidth="1.75"
              strokeDasharray="4 5"
              strokeLinecap="round"
            />
          </svg>
          <span className="scroll-flight-plane absolute left-1/2 top-0 -translate-x-1/2 text-[#C9A66B] drop-shadow-xs">
            <svg viewBox="0 0 18 18" className="h-4.5 w-4.5 rotate-90" fill="currentColor">
              <path d="M16 9c0-.6-.5-1.1-1.1-1.1h-4L7.2 2.5H5.8l1.8 5.4H4.2L3 6.7H1.9l.8 2.3-.8 2.3H3l1.2-1.2h3.4L5.8 15.5h1.4l3.7-5.4h4c.6 0 1.1-.5 1.1-1.1z" />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
