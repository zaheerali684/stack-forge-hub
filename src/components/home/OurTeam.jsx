const teamMembers = [
  {
    name: "Zaheer Ali",
    role: "Founder & Full Stack Developer",
    image: "/images/zaheer.png",
  },
  {
    name: "Hasaan Azeem",
    role: "Full stack developer",
    image: "/images/hasaan.png",
  },
 
  {
    name: "Ihtesham Majeed",
    role: "UI/UX Designer",
    image: "/images/buddy.png",
  },
];

export default function OurTeam() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-gray-100" id="team">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4 flex justify-center items-center gap-2">
            Our Team
          </h2>
          <span className="block h-[2px] w-28 bg-indigo-600 rounded-full mx-auto"></span>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 ring-1 ring-gray-100 hover:ring-2 hover:ring-indigo-500/50 p-8 group"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                 <div className="absolute inset-0 bg-indigo-100 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                 <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full relative z-10 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500"
                  />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium bg-indigo-50 inline-block px-3 py-1 rounded-full text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
