export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Company Info */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
            STACK <span className="text-indigo-600">FORGE</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-sm">
            We engineer scalable digital solutions. From web platforms to cloud infrastructure, turning complex problems into elegant software.
          </p>
          <div className="flex gap-4 mt-6">
             {/* Social Placeholders */}
             <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer">
                X
             </div>
             <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer">
                In
             </div>
             <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white transition-all cursor-pointer">
                Fb
             </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Company</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">About</a></li>
            <li><a href="#services" className="text-slate-600 hover:text-indigo-600 transition-colors">Services</a></li>
            <li><a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors">Work</a></li>
            <li><a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Connect</h3>
           <ul className="space-y-3">
            <li className="text-slate-600">stackforgehub@gmail.com</li>
            <li className="text-slate-600">+92 336 9334198</li>
            <li className="text-slate-600">Zaheer Ali</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center bg-white">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Stack Forge Hub. All Rights Reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0 text-sm text-slate-500">
            <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
