import { Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "Stack Forge transformed our legacy system into a modern cloud platform. Their attention to detail is unmatched.",
      author: "Hasaan Azeem",
      role: "Full Stack Developer"
    },
    {
      text: "Reliable, fast, and incredibly skilled. They didn't just build an app; they helped us refine our entire business model.",
      author: "Zaheer Ali",
      role: "Founder & Full Stack Developer"
    },
    {
      text: "The team's expertise in security and scalability gave us the confidence to launch enterprise-wide.",
      author: "Ihtesham Majeed",
      role: "UI/UX Designer"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 flex justify-center items-center gap-2">
            Testimonials
          </h2>
          <span className="block h-[2px] w-28 bg-indigo-600 rounded-full mx-auto"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 ring-1 ring-gray-100 hover:ring-2 hover:ring-indigo-500/50 relative group">
              <Quote className="absolute top-8 left-8 text-indigo-100 w-12 h-12 -z-0 group-hover:text-indigo-200 transition-colors" />
              <p className="text-slate-600 italic mb-8 relative z-10 pt-4 leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{review.author}</h4>
                <p className="text-indigo-600 text-sm font-medium">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
