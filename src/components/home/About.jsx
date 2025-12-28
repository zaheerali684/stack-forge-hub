export default function About() {
  return (
    <section className="py-24 px-6 bg-slate-50" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight flex justify-center items-center gap-2">
          About <span className="text-indigo-600">Stack Forge</span>
        </h2>
        <span className="block h-[2px] w-28 bg-indigo-600 rounded-full mx-auto mb-10"></span>

        <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light mb-12">
          <p>
            Stack Forge Hub is a professional software house delivering innovative and reliable IT solutions to businesses worldwide. We specialize in <span className="text-slate-900 font-medium">Web Development</span>, <span className="text-slate-900 font-medium">Mobile Applications</span>, and <span className="text-slate-900 font-medium">Networking Solutions</span>.
          </p>
          <p>
            Our team is committed to excellence, innovation, and client satisfaction, ensuring every project is executed with precision and care. We don't just write code; we architect success.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="border-l-2 border-indigo-600 pl-4">
                <h4 className="text-2xl font-bold text-slate-900">50+</h4>
                <p className="text-sm text-slate-500">Projects Delivered</p>
            </div>
            <div className="border-l-2 border-indigo-600 pl-4">
                <h4 className="text-2xl font-bold text-slate-900">12+</h4>
                <p className="text-sm text-slate-500">Global Clients</p>
            </div>
            <div className="border-l-2 border-indigo-600 pl-4">
                <h4 className="text-2xl font-bold text-slate-900">24/7</h4>
                <p className="text-sm text-slate-500">Support</p>
            </div>
        </div>
      </div>
    </section>
  );
}
