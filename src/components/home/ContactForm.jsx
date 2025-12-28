import { useState } from "react";
import { api } from "../../services/api";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/contact", form);
      alert("Thank you! We will contact you shortly.");
      setForm({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <section className="py-20" id="contact">
      <div className="max-w-xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 flex justify-center items-center gap-2">
            Start a Conversation
          </h2>
          <span className="block h-[2px] w-28 bg-indigo-600 rounded-full mx-auto"></span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
             <input
                className="w-full p-4 bg-white border border-gray-300 rounded-lg text-slate-900 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all shadow-sm"
                placeholder="Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
            />
            <input
                className="w-full p-4 bg-white border border-gray-300 rounded-lg text-slate-900 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all shadow-sm"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
            /> 
          </div>

          <select
            className="w-full p-4 bg-white border border-gray-300 rounded-lg text-slate-900 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all cursor-pointer appearance-none shadow-sm"
            value={form.service}
            onChange={e => setForm({ ...form, service: e.target.value })}
            required
          >
            <option value="">Select Interest</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Apps">Mobile Apps</option>
            <option value="Networking">Networking</option>
            <option value="Graphic Designing">Graphic Designing</option>
          </select>
          <textarea
            className="w-full p-4 bg-white border border-gray-300 rounded-lg text-slate-900 placeholder-gray-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all h-32 resize-none shadow-sm"
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            required
          ></textarea>
          <button className="bg-indigo-600 text-white font-bold w-full py-4 rounded-lg hover:bg-indigo-700 transition active:scale-[0.98] shadow-lg shadow-indigo-500/30">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
