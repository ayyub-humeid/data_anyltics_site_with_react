import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  //   <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
  //     <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl transition-all duration-300 hover:shadow-purple-500/10 hover:border-neutral-700">
  //       <div className="flex flex-col items-center text-center space-y-6">
  //         <div className="w-20 h-20 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 animate-pulse">
  //           <svg
  //             className="w-10 h-10 text-white"
  //             fill="none"
  //             stroke="currentColor"
  //             viewBox="0 0 24 24"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth={2}
  //               d="M13 10V3L4 14h7v7l9-11h-7z"
  //             />
  //           </svg>
  //         </div>
  //         <div className="space-y-2">
  //           <h1 className="text-3xl font-bold text-white tracking-tight">
  //             Ai Resolution
  //           </h1>
  //           <p className="text-neutral-400 text-sm leading-relaxed">
  //             Your new React + Tailwind project is live. Clean, fast, and ready
  //             for development.
  //           </p>
  //         </div>
  //         <div className="w-full pt-4">
  //           <button
  //             onClick={() => setCount((prev) => prev + 1)}
  //             className="group relative w-full inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-neutral-800 rounded-xl hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-700"
  //           >
  //             <span className="relative flex items-center gap-2">
  //               Clicks:{" "}
  //               <span className="text-purple-400 tabular-nums">{count}</span>
  //             </span>
  //           </button>
  //         </div>
  //         <p className="text-xs text-neutral-500 pt-2 italic">
  //           Edit src/App.jsx to start building your dream project.
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
