
import { useEffect, useState, useCallback } from "react";

export default function Lightbox({ media, index, onClose, onPrev, onNext }) {
  const item = media[index];

  // console.log("inside Litebox item",item);
  // console.log("inside Litebox media",media);
  // console.log("full image url",item.full);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono tracking-widest pointer-events-none">
        {index + 1} / {media.length}
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-400/30 border border-white/20 text-white text-xl flex items-center justify-center transition-all duration-200 cursor-pointer z-10"
      >×</button>

      {/* Prev */}
      {media.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-cyan-400/20 border border-white/20 hover:border-cyan-400/50 text-white text-2xl flex items-center justify-center transition-all duration-200 cursor-pointer z-10"
        >‹</button>
      )}

      {/* Media */}
      <div
        className="flex flex-col items-center gap-3 max-w-[88vw]"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            key={item.full}
            src={item.full}
            controls
            autoPlay
            className="max-w-[88vw] max-h-[72vh] rounded-xl shadow-2xl outline-none"
          />
        ) : (
          <img
            src={item.full}
            alt={item.caption}
            className="max-w-[88vw] max-h-[72vh] object-contain rounded-xl shadow-2xl"
          />
        )}
        {item.caption && (
          <span className="text-white/60 text-sm bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
            {item.type === "video" && "▶ "}{item.caption}
          </span>
        )}
      </div>

      {/* Next */}
      {media.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-cyan-400/20 border border-white/20 hover:border-cyan-400/50 text-white text-2xl flex items-center justify-center transition-all duration-200 cursor-pointer z-10"
        >›</button>
      )}
    </div>
  );
}