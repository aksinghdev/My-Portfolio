

//______________________________________________________________________________________
// ******************** new with gallery integrated *********************
// _______________________________________________________________________________________



import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { apiConnector } from "../../api/apiConnector";
import { dashboardEndpoints } from "../../api/apis";
import ProjectGallery from "../gallary/ProjectGallery"; 
import LiveClock from "./LiveClock";

// resume link
const RESUME_LINK = "https://drive.google.com/file/d/1EFhs6RSAamdKPl68mnxevixv3CvYOpS2/view?usp=drive_link";

// projects data
const PROJECTS = [
  {
    id: 1,
    title: "E-Learning Application [Study-Notion]",
    description: "StudyNotion Tech – A MERN stack EdTech platform with role-based authentication, lecture management, reviews, and payment support.",
    tags: ["React", "Node.js","Express.js", "MongoDB","TailWindcss","Payment Integration","jwt","Mongoose","Cloudinary"],
    // video: "https://res.cloudinary.com/drssmbf2p/video/upload/v1735985165/singhraj/bguy34zrkokcajt5hizt.mp4",
    image: "https://res.cloudinary.com/drssmbf2p/image/upload/v1773906498/717340b6-c9ab-46ad-8680-4377392db364.png",
    liveUrl: "https://github.com/aksinghdev/study-notion-tech",
    githubUrl: "https://github.com/aksinghdev/study-notion-tech",
    gallery: [
      {
        type: "image",
        caption: "Dashboard",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1773906383/447fe697-09a4-4ae6-aaeb-e344ccbe46fe.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1773906098/dashboard_sdptbd.png",
      },
      {
        type: "image",
        caption: " Login",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1773906098/thumbnail_assysr.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1773906099/login_beadmx.png",
      },
      {
        type: "image",
        caption: "SignUp",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1773906383/447fe697-09a4-4ae6-aaeb-e344ccbe46fe.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1773906098/signup_2_icuvg5.png",
      },
      {
        type: "image",
        caption: "very otp",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1773906383/447fe697-09a4-4ae6-aaeb-e344ccbe46fe.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1773906098/verifyotp_ei2jkw.png",
      },
      {
        type: "image",
        caption: "Footer",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1773906383/447fe697-09a4-4ae6-aaeb-e344ccbe46fe.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1773906098/footer_rlsnq6.png",
      },
    ],
  },
  {
    id: 2,
    title: "Tic-Tac Clash Game",
    description: "Built a two-player browser-based game with win/draw detection and reset functionality.",
    tags: ["HTML5", "CSS3", "JavaScript (ES6)"],
    image: "https://res.cloudinary.com/drssmbf2p/image/upload/v1773908928/16781f91-9556-4e0a-96ba-1d11400bfd71.png",
    // video: "https://res.cloudinary.com/drssmbf2p/image/upload/v1773908928/16781f91-9556-4e0a-96ba-1d11400bfd71.png",
    liveUrl: "#",
    githubUrl: "#",
    gallery: [
      {
        type: "image",
        caption: "Player Form",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1773908928/16781f91-9556-4e0a-96ba-1d11400bfd71.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1774040366/Screenshot_2026-03-21_022520_qtbmcd.png",
      },
      // {
      //   type: "video",
      //   caption: "Live Demo Video",
      //   thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1773908928/16781f91-9556-4e0a-96ba-1d11400bfd71.png",
      //   full:  "https://res.cloudinary.com/YOUR_CLOUD/video/upload/demo.mp4",
      // },
      {
        type: "image",
        caption: "Game Tie",
        thumb: "https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_400,h_240,c_fill/rooms.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1774040425/Screenshot_2026-03-21_022945_qmao4h.png",
      },
      {
        type: "image",
        caption: "Winner",
        thumb: "https://res.cloudinary.com/YOUR_CLOUD/image/upload/w_400,h_240,c_fill/rooms.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1774040363/Screenshot_2026-03-21_022612_lhn0xy.png",
      },
    ],
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "A responsive portfolio showcasing my projects and development skills.",
    tags: ["React", "Tailwind", "Vite","Mongodb","Node.js","Express.js"],
    image: "https://res.cloudinary.com/drssmbf2p/image/upload/v1774038174/904e3a4e-a549-4cd4-a37b-648860bc1c4b.png",
    video: "",
    liveUrl: "#",
    githubUrl: "#",
    gallery: [
      {
        type: "image",
        caption: "Dashboard",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1774037731/2dcb7cca-fe4d-4377-869e-433073d277d1.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1774038897/dashbord_kyjqmu.png",
      },
      {
        type: "image",
        caption: "Home Page",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1774037731/2dcb7cca-fe4d-4377-869e-433073d277d1.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1774038897/home_mwxbni.png",
      },
      {
        type: "image",
        caption: "Home page Contact Card",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1774037731/2dcb7cca-fe4d-4377-869e-433073d277d1.png",
        full: "https://res.cloudinary.com/drssmbf2p/image/upload/v1774038896/homecontact_hayhvb.png"
      },
      {
        type: "image",
        caption: "My Education",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1774037731/2dcb7cca-fe4d-4377-869e-433073d277d1.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1774038895/education_a1h79t.png",
      },
      {
        type: "image",
        caption: "Contact Form",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1774037731/2dcb7cca-fe4d-4377-869e-433073d277d1.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1774038895/contact_cri4mz.png",
      },
      {
        type: "image",
        caption: "Skills",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1774037731/2dcb7cca-fe4d-4377-869e-433073d277d1.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1774038894/skills_bwqhxe.png",
      },
      {
        type: "image",
        caption: "signup",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1774037731/2dcb7cca-fe4d-4377-869e-433073d277d1.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1774039468/signup_uyd7ri.png",
      },
      {
        type: "image",
        caption: "Login",
        thumb: "https://res.cloudinary.com/drssmbf2p/image/upload/v1774037731/2dcb7cca-fe4d-4377-869e-433073d277d1.png",
        full:  "https://res.cloudinary.com/drssmbf2p/image/upload/v1774039469/login_kevrkd.png",
      },
    ],
  },
];


export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser]           = useState(null);
  const [galleryProjectId, setGalleryProjectId] = useState(null); // ✅ which project's gallery is open

  // Fetch dashboard data
  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        const user  = localStorage.getItem("user");
        const result = await apiConnector(
          "GET",
          dashboardEndpoints.DASHBOARD_API,
          null,
          { Authorization: `Bearer ${token}` },
          null
        );
        const data = result?.data;
        if (!data.success) {
          toast.error("Please login first");
          navigate("/login");
          return;
        }
        setUser(JSON.parse(user));
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong");
        navigate("/login");
      }
    };
    getDashboardData();
  }, []);

  // Logout
  const logoutHandler = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good Morning";
    if (h < 17) return "Good Afternoon";
    return "Good Evening";
  };

  // console.log("gallery project id",galleryProjectId);
  // Active gallery project
  const activeProject = PROJECTS.find((p) => p.id === galleryProjectId);
  // console.log("active projects",activeProject);

  return (
    <div className="min-h-screen bg-[#081b29] text-slate-200 font-inter relative overflow-x-hidden">

      {/* ── TOPBAR ── */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-10 py-4 bg-[#081b29]/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-5">
          <span className="text-cyan-400 font-bold text-lg tracking-tight">⚡ Dashboard</span>
          <span className="text-slate-600 text-xs tabular-nums hidden sm:block">
            <LiveClock/>
          </span>
        </div>
        <button
          onClick={logoutHandler}
          className="text-slate-500 text-sm border border-white/10 px-4 py-1.5 rounded-full hover:text-slate-300 hover:border-white/25 transition-all"
        >
          Logout →
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-10 py-10">

        {/* ── WELCOME CARD ── */}
        <section className="flex flex-wrap justify-between items-center gap-8 bg-gradient-to-br from-white/[0.03] to-cyan-500/[0.04] border border-cyan-500/20 rounded-3xl p-8 mb-10">
          <div className="flex-1 min-w-[260px]">
            <span className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs px-3 py-1 rounded-full mb-4">
              👋 {greeting()}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-2 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              {user?.name || "User"}
            </h1>
            <p className="text-slate-500 text-sm mb-4">📧 {user?.email || "fetching..."}</p>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-md">
              Welcome back to your portfolio dashboard. Your work speaks louder than words.
            </p>
            {/* splite */}
            <div className="flex flex-wrap gap-3">
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-400 text-[#081b29] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-cyan-300 transition-all"
              >
                📄 Download Resume
              </a>
              <a
                href="/"
                className="border border-white/10 text-slate-400 text-sm px-5 py-2.5 rounded-full hover:border-white/25 hover:text-slate-300 transition-all"
              >
                🌐 View Portfolio
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5">
            <div className="p-[3px] rounded-full bg-gradient-to-br from-cyan-400 to-violet-600">
              <div className="w-24 h-24 rounded-full bg-[#0d1f2d] flex items-center justify-center text-4xl font-bold text-cyan-400">
                {user?.name?.[0]?.toUpperCase() || "U"}
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { value: PROJECTS.length, label: "Projects" },
                // { value: "1+",            label: "Years"    },
                { value: "10+",           label: "Skills"  },
                { value: "2025",           label: "B Tech"  },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center bg-white/[0.03] border border-white/[0.07] rounded-2xl px-4 py-3">
                  <span className="text-2xl font-bold text-cyan-400">{s.value}</span>
                  <span className="text-[11px] text-slate-600 mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS SECTION ── */}
        <section>
          <div className="flex items-baseline gap-3 mb-6 flex-wrap">
            <h2 className="text-2xl font-extrabold tracking-tight">🚀 My Projects</h2>
            <span className="text-slate-600 text-xs">Screenshots & demos loaded from Cloudinary</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:border-cyan-500/40 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="h-44 overflow-hidden bg-[#0d1f2d] relative flex items-center justify-center">
                  {project.video ? (
                    <video src={project.video} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentNode.innerHTML =
                          `<div class="text-slate-700 text-5xl flex items-center justify-center w-full h-full">🖼️</div>`;
                      }}
                    />
                  )}
                  {project.video && (
                    <span className="absolute top-2.5 right-2.5 bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-[11px] px-2.5 py-0.5 rounded-full">
                      ▶ Video
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="font-bold text-base mb-1">{project.title}</h3>
                  <p className="text-slate-500 text-[13px] leading-relaxed mb-3">{project.description}</p>

                  {/* Tags rendering */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((t) => (
                      <span key={t} className="text-[11px] px-2.5 py-0.5 bg-white/[0.04] border border-white/[0.07] rounded-full text-slate-500">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-3 border-t border-white/[0.05] flex-wrap">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 text-xs font-medium hover:text-slate-300 transition-colors"
                    >
                      GitHub →
                    </a>

                    {/* ✅ "Live Demo" → Gallery kholega */}
                    {project.liveUrl && (
                      <button
                        // onClick={() => setGalleryProjectId(project.id)}
                        className="text-cyan-500 text-xs font-medium hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        Live Demo →
                      </button>
                    )}

                    {/* ✅ Gallery shortcut button */}
                    {project.gallery?.length > 0 && (
                      <button
                        onClick={() => setGalleryProjectId(project.id)}
                        className="ml-auto flex items-center gap-1.5 text-[11px] font-semibold text-cyan-400 border border-cyan-500/25 hover:border-cyan-400/60 bg-cyan-500/5 hover:bg-cyan-400/10 px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer"
                      >
                        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                          <rect x="0.5" y="0.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1"/>
                          <rect x="7"   y="0.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1"/>
                          <rect x="0.5" y="7"   width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1"/>
                          <rect x="7"   y="7"   width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1"/>
                        </svg>
                        Gallery
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-white/[0.04] text-slate-700 text-xs mt-4">
        Built with ❤️ · Portfolio Dashboard
      </footer>

      {/* ✅ Gallery Modal — renders only when a project is selected */}
      {galleryProjectId !== null && activeProject && (
        <ProjectGallery
          media={activeProject.gallery}
          projectTitle={activeProject.title}
          onClose={() => setGalleryProjectId(null)}
        />
      )}

    </div>
  );
}