export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 text-center px-6 overflow-hidden bg-transparent">
      
      <div className="relative z-10 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
        Build Faster with <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
          Stack Forge Hub
        </span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto delay-100 animate-fade-in opacity-0 fill-mode-forwards">
        We engineer scalable digital solutions. From <span className="text-slate-900 font-medium">web platforms</span> to <span className="text-slate-900 font-medium">cloud infrastructure</span>, we turn complex problems into elegant software.
      </p>
      
      <div className="mt-10 delay-200 animate-fade-in opacity-0 fill-mode-forwards flex justify-center gap-4">
        <button 
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 active:scale-95 cursor-pointer"
        >
          Start Project
        </button>
        <button 
          onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 rounded-lg font-semibold text-slate-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all active:scale-95 cursor-pointer"
        >
          View Work
        </button>
      </div>
      </div>
    </section>
  );
}
