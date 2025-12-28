import { Search, PenTool, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      desc: "We dive deep into your requirements to understand your core challenges."
    },
    {
      icon: PenTool,
      title: "Strategy",
      desc: "We design a roadmap and architecture tailored to your business goals."
    },
    {
      icon: Code,
      title: "Development",
      desc: "Our engineers build scalable, secure, and high-performance software."
    },
    {
      icon: Rocket,
      title: "Launch",
      desc: "We deploy, monitor, and scale your product for maximum impact."
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-gray-100" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 flex justify-center items-center gap-2">
            Our Process
          </h2>
          <span className="block h-[2px] w-28 bg-indigo-600 rounded-full mx-auto"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:border-indigo-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                  <step.icon size={28} className="text-slate-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
