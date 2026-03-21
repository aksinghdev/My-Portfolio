

import { useState, useEffect, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────
//  APNE CLOUDINARY / DRIVE URLS YAHAN ADD KAREIN
// ─────────────────────────────────────────────────────────────────
const PROJECT_MEDIA = {
  "E-Commerce Platform": [
    {
      type: "image",
      caption: "Home Page",
      thumb: "https://res.cloudinary.com/demo/image/upload/w_400,h_240,c_fill/sample.jpg",
      full: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
    {
      type: "image",
      caption: "Product Listing",
      thumb: "https://res.cloudinary.com/demo/image/upload/w_400,h_240,c_fill/cld-sample-2.jpg",
      full: "https://res.cloudinary.com/demo/image/upload/cld-sample-2.jpg",
    },
    {
      type: "image",
      caption: "Cart & Checkout",
      thumb: "https://res.cloudinary.com/demo/image/upload/w_400,h_240,c_fill/cld-sample-3.jpg",
      full: "https://res.cloudinary.com/demo/image/upload/cld-sample-3.jpg",
    },
    {
      type: "image",
      caption: "Payment Gateway",
      thumb: "https://res.cloudinary.com/demo/image/upload/w_400,h_240,c_fill/cld-sample-4.jpg",
      full: "https://res.cloudinary.com/demo/image/upload/cld-sample-4.jpg",
    },
  ],
  "Real-Time Chat App": [
    {
      type: "image",
      caption: "Chat Interface",
      thumb: "https://res.cloudinary.com/demo/image/upload/w_400,h_240,c_fill/cld-sample-5.jpg",
      full: "https://res.cloudinary.com/demo/image/upload/cld-sample-5.jpg",
    },
    {
      type: "video",
      caption: "Live Demo",
      thumb: "https://res.cloudinary.com/demo/image/upload/w_400,h_240,c_fill/sample.jpg",
      full: "https://res.cloudinary.com/demo/video/upload/dog.mp4",
    },
    {
      type: "image",
      caption: "Rooms Panel",
      thumb: "https://res.cloudinary.com/demo/image/upload/w_400,h_240,c_fill/cld-sample.jpg",
      full: "https://res.cloudinary.com/demo/image/upload/cld-sample.jpg",
    },
  ],
  "Weather Dashboard": [
    {
      type: "image",
      caption: "Dashboard Overview",
      thumb: "https://res.cloudinary.com/demo/image/upload/w_400,h_240,c_fill/sample.jpg",
      full: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
    },
    {
      type: "image",
      caption: "7-Day Forecast",
      thumb: "https://res.cloudinary.com/demo/image/upload/w_400,h_240,c_fill/cld-sample-2.jpg",
      full: "https://res.cloudinary.com/demo/image/upload/cld-sample-2.jpg",
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
//  ************************** LIGHTBOX **************************
// ─────────────────────────────────────────────────────────────────
function Lightbox({ media, index, onClose, onPrev, onNext }) {
  const item = media[index];

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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      style={{ animation: "fadeIn 0.2s ease" }}
    >
      {/* Counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono tracking-widest">
        {index + 1} / {media.length}
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-400/30 border border-white/20 text-white text-xl flex items-center justify-center transition-all duration-200"
      >
        ×
      </button>

      {/* Prev */}
      {media.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-cyan-400/25 border border-white/20 hover:border-cyan-400/50 text-white text-2xl flex items-center justify-center transition-all duration-200"
        >
          ‹
        </button>
      )}

      {/* Media */}
      <div
        className="flex flex-col items-center gap-3 max-w-[88vw]"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            src={item.full}
            controls
            autoPlay
            className="max-w-[88vw] max-h-[72vh] rounded-xl shadow-2xl"
          />
        ) : (
          <img
            src={item.full}
            alt={item.caption}
            className="max-w-[88vw] max-h-[72vh] object-contain rounded-xl shadow-2xl"
          />
        )}
        <span className="text-white/60 text-sm bg-white/10 backdrop-blur px-4 py-1.5 rounded-full">
          {item.type === "video" && " ▶ "}
          {item.caption}
        </span>
      </div>

      {/* Next */}
      {media.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-cyan-400/25 border border-white/20 hover:border-cyan-400/50 text-white text-2xl flex items-center justify-center transition-all duration-200"
        >
          ›
        </button>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
//  ************************ GALLERY MODAL ************************
// ─────────────────────────────────────────────────────────────────
function GalleryModal({ project, onClose }) {
  const [lbIndex, setLbIndex] = useState(null);
  const media = PROJECT_MEDIA[project] ?? [];

  const openLb = (i) => setLbIndex(i);
  const closeLb = () => setLbIndex(null);
  const goPrev = useCallback(() => setLbIndex((i) => (i - 1 + media.length) % media.length), [media.length]);
  const goNext = useCallback(() => setLbIndex((i) => (i + 1) % media.length), [media.length]);

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideUp { from { opacity:0;transform:translateY(24px) } to { opacity:1;transform:translateY(0) } }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-md"
        style={{ animation: "fadeIn 0.2s ease" }}
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="pointer-events-auto w-full max-w-3xl max-h-[88vh] flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          style={{
            background: "linear-gradient(145deg,#0d1f2d,#0a1628)",
            animation: "slideUp 0.28s cubic-bezier(0.34,1.5,0.64,1)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] flex-shrink-0">
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <h2 className="text-white font-semibold text-lg tracking-tight">{project}</h2>
              </div>
              <p className="text-white/40 text-xs">
                {media.length} screenshot{media.length !== 1 ? "s" : ""} &amp; videos
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-400/40 text-white/50 hover:text-red-400 text-lg flex items-center justify-center transition-all duration-200"
            >
              ×
            </button>
          </div>

          {/* Thumbnail Grid */}
          <div className="overflow-y-auto flex-1 p-5 scrollbar-thin">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {media.map((item, i) => (
                <div
                  key={i}
                  onClick={() => openLb(i)}
                  className="group relative rounded-xl overflow-hidden border border-white/[0.08] hover:border-cyan-400/40 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/10 aspect-video bg-[#0a1525]"
                >
                  <img
                    src={item.thumb}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />

                  {/* Fallback */}
                  <div className="absolute inset-0 flex items-center justify-center text-3xl text-cyan-400/20 -z-10">
                    🖼
                  </div>

                  {/* Video badge */}
                  {item.type === "video" && (
                    <span className="absolute top-2 right-2 bg-cyan-400 text-black text-[9px] font-bold px-2 py-0.5 rounded tracking-widest">
                      ▶ VIDEO
                    </span>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-white text-[11px] font-medium truncate">{item.caption}</span>
                      <span className="text-cyan-300 text-lg leading-none ml-1">⊕</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-3 border-t border-white/[0.06] flex-shrink-0">
            <p className="text-white/20 text-[11px] font-mono tracking-wide">
              Click thumbnail to expand · Arrow keys to navigate · ESC to close
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

// ─────────────────────────────────────────────────────────────────
//  ************************* PROJECT CARD *************************
// ─────────────────────────────────────────────────────────────────
function ProjectCard({ title, description, tags, githubUrl, demoUrl, hasVideo }) {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      <div className="group relative rounded-2xl border border-white/[0.08] hover:border-cyan-400/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/40 flex flex-col"
        style={{ background: "linear-gradient(145deg,#0d1f2d,#0a1628)" }}
      >
        {/* Thumbnail area */}
        <div className="relative h-44 bg-[#061018] flex items-center justify-center overflow-hidden">
          <span className="text-5xl opacity-20">🖼</span>
          {hasVideo && (
            <span className="absolute top-3 right-3 bg-cyan-400 text-black text-[10px] font-bold px-2.5 py-1 rounded-md tracking-widest">
              ▶ Video
            </span>
          )}
          {/* Shimmer line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-5 flex-1">
          <h3 className="text-white font-semibold text-base tracking-tight">{title}</h3>
          <p className="text-white/45 text-sm leading-relaxed">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-white/50 border border-white/10 rounded-full px-2.5 py-0.5 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links + Gallery Button */}
          <div className="flex items-center gap-4 mt-auto pt-1 flex-wrap">
            {githubUrl && (
              <a href={githubUrl} className="text-white/40 hover:text-white/70 text-sm transition-colors">
                GitHub →
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                Live Demo →
              </a>
            )}

            {/* Gallery Button */}
            <button
              onClick={() => setShowGallery(true)}
              className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-cyan-300 border border-cyan-400/30 hover:border-cyan-400/60 bg-cyan-400/5 hover:bg-cyan-400/15 px-3.5 py-2 rounded-lg transition-all duration-200 group/btn"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                <rect x="0.5" y="0.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1"/>
                <rect x="8" y="0.5" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1"/>
                <rect x="0.5" y="8" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1"/>
                <rect x="8" y="8" width="5.5" height="5.5" rx="1.2" stroke="currentColor" strokeWidth="1"/>
              </svg>
              Gallery
            </button>
          </div>
        </div>
      </div>

      {showGallery && (
        <GalleryModal project={title} onClose={() => setShowGallery(false)} />
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────
//  ************************** MAIN APP ****************************
// ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-[#061018] p-8 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');
        * { box-sizing: border-box; font-family: 'DM Sans', sans-serif; }
        h1,h2,h3 { font-family: 'Syne', sans-serif; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.2); border-radius: 3px; }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">🚀</span>
          <h2 className="text-white text-2xl font-bold">My Projects</h2>
          <span className="text-white/25 text-sm ml-1">Screenshots & demos loaded from Cloudinary</span>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <ProjectCard
            title="E-Commerce Platform"
            description="Full-stack shopping app with auth, cart & payments."
            tags={["React", "Node.js", "MongoDB"]}
            githubUrl="#"
          />
          <ProjectCard
            title="Real-Time Chat App"
            description="WebSocket-based messaging with rooms & notifications."
            tags={["Socket.io", "Express", "React"]}
            githubUrl="#"
            demoUrl="#"
            hasVideo
          />
          <ProjectCard
            title="Weather Dashboard"
            description="Live weather with 7-day forecast & location search."
            tags={["React", "OpenWeather API", "CSS"]}
            githubUrl="#"
            demoUrl="#"
          />
        </div>

        {/* How to add media */}
        <div className="mt-10 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.03] p-5">
          <p className="text-cyan-400 font-semibold text-sm mb-2">📁 Apne Media Files Kaise Add Karein</p>
          <p className="text-white/40 text-sm leading-7">
            File ke upar <code className="text-cyan-300 bg-cyan-400/10 px-1.5 py-0.5 rounded text-xs">PROJECT_MEDIA</code> object mein apne project ka naam key ke roop mein use karein.<br />
            <span className="text-white/60 font-medium">thumb</span> → thumbnail URL (Cloudinary: w_400,h_240,c_fill) &nbsp;|&nbsp;
            <span className="text-white/60 font-medium">full</span> → full size URL &nbsp;|&nbsp;
            <span className="text-white/60 font-medium">type</span> → "image" ya "video"
          </p>
        </div>
      </div>
    </div>
  );
}