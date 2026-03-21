
import { useState, useCallback, useEffect } from "react";
import Lightbox from "./Lightbox";


export default function ProjectGallery({ media = [], projectTitle = "", onClose }) {
  const [lbIndex, setLbIndex] = useState(null);

  const openLb  = (i) => setLbIndex(i);
  const closeLb = () => setLbIndex(null);
  const goPrev  = useCallback(() => setLbIndex((i) => (i - 1 + media.length) % media.length), [media.length]);
  const goNext  = useCallback(() => setLbIndex((i) => (i + 1) % media.length), [media.length]);

  // console.log("inside Gallery media",media);
  // console.log("inside Gallery title",projectTitle);


  // ESC closes modal (when lightbox is not open)
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape" && lbIndex === null) onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lbIndex, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="pointer-events-auto w-full max-w-3xl max-h-[88vh] flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          style={{ background: "linear-gradient(145deg,#0d1f2d 0%,#081b29 100%)" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07] flex-shrink-0">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <h2 className="text-white font-bold text-base tracking-tight">{projectTitle}</h2>
              </div>
              <p className="text-slate-600 text-xs">
                {media.length} file{media.length !== 1 ? "s" : ""}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-400/30 text-slate-500 hover:text-red-400 text-lg flex items-center justify-center transition-all duration-200 cursor-pointer"
            >×</button>
          </div>

          {/* Thumbnail Grid */}
          <div
            className="overflow-y-auto flex-1 p-5"
            style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(34,211,238,0.2) transparent" }}
          >
            {media.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-48 text-slate-600 gap-3">
                <span className="text-5xl">🖼️</span>
                <p className="text-sm">Koi media file upload nahi ki gayi</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {media.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => openLb(i)}
                    className="group relative rounded-xl overflow-hidden border border-white/[0.07] hover:border-cyan-500/40 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/10 bg-[#0d1f2d] aspect-video"
                  >
                    <img
                      src={item.full}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                    {/* Fallback icon */}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center text-3xl text-slate-700">
                      🖼️
                    </div>
                    {/* Video badge */}
                    {item.type === "video" && (
                      <span className="absolute top-2 right-2 bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-[9px] font-bold px-2 py-0.5 rounded-full tracking-widest">
                        ▶ VIDEO
                      </span>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-[11px] font-medium truncate pr-1">{item.caption}</span>
                        <span className="text-cyan-300 text-base leading-none flex-shrink-0">⊕</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3 border-t border-white/[0.05] flex-shrink-0">
            <p className="text-slate-700 text-[11px] font-mono">
              Click thumbnail to expand · ← → keys to navigate · ESC to close
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lbIndex !== null && (
        <Lightbox
          media={media}
          index={lbIndex}
          onClose={closeLb}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </>
  );
}
