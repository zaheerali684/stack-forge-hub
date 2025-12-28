import { Code, Smartphone, Wifi, PenTool } from 'lucide-react';

const services = [
  { icon: Code, title: 'Web Development', desc: 'Modern, responsive websites tailored to your brand.' },
  { icon: Smartphone, title: 'App Development', desc: 'iOS & Android apps built for performance.' },
  { icon: Wifi, title: 'Networking', desc: 'Secure and scalable network infrastructure solutions.' },
  { icon: PenTool, title: 'Graphic Design', desc: 'Creative visuals that tell your brand story.' },
];

export default function Services() {
  return (
    <section className="py-24 text-center" id="services">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 flex justify-center items-center gap-2">
          Technical Expertise
        </h2>
        <span className="block h-[2px] w-28 bg-indigo-600 rounded-full mx-auto"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white border border-gray-100 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-full blur-2xl transform translate-x-12 -translate-y-12"></div>
            <div className="mb-6 inline-block p-3 rounded-lg bg-slate-50 group-hover:bg-indigo-50 transition-colors">
              <service.icon size={28} className="text-slate-500 group-hover:text-indigo-600 transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
