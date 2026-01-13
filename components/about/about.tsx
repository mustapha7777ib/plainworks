import { motion } from 'framer-motion';
import { Minus, Target, Shield, Zap, Users, Binary } from 'lucide-react';

const values = [
  {
    title: "Professional Discipline",
    description: "We believe projects succeed through structure, planning, and control—not shortcuts.",
    icon: <Binary size={20} />,
  },
  {
    title: "Accountability",
    description: "We take ownership of outcomes. Responsibility is not delegated; it is assumed.",
    icon: <Shield size={20} />,
  },
  {
    title: "Integrity",
    description: "We operate transparently, ethically, and in full alignment with client expectations.",
    icon: <Zap size={20} />,
  },
  {
    title: "Technical Excellence",
    description: "We respect engineering fundamentals while continuously improving through innovation.",
    icon: <Target size={20} />,
  },
  {
    title: "Partnership",
    description: "We collaborate with clients and consultants as long-term partners, not transactional vendors.",
    icon: <Users size={20} />,
  },
];

export default function VisionValues() {
  return (
    <main className="bg-white">
      {/* --- HERO SECTION: VISION --- */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col space-y-4 mb-8">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em]">
              <Minus size={16} />
              <span>Our Vision</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[0.9]">
                A long road, <br />
                <span className="text-orange-400 italic font-medium">well paved.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-xl text-slate-500 leading-relaxed border-l border-slate-200 pl-6">
                To become a trusted, technology-enabled project delivery group, setting the benchmark for integrated design and construction across Africa and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION: DARK THEME --- */}
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-orange-400" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-orange-400">
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                Bringing order to complexity and <span className="text-slate-500">clarity to execution.</span>
              </h2>
            </div>
            <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                To deliver end-to-end project solutions that combine disciplined execution, technical integrity, and data-driven insight helping clients achieve certainty in cost, schedule, quality, and long-term asset performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES: ASYMMETRIC GRID --- */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col mb-16 space-y-4">
            <div className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-[0.2em]">
              <Minus size={16} />
              <span>Foundations</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
              Core <span className="text-orange-400">Values.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-white p-10 hover:bg-slate-50 transition-colors duration-500"
              >
                <div className="text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
            {/* Call to Action Square */}
            <div className="bg-slate-900 p-10 flex flex-col justify-between">
              <p className="text-white/50 font-mono text-[10px] uppercase tracking-widest">
                Our Standard
              </p>
              <p className="text-white text-lg font-medium">
                We honor engineering tradition while shaping the future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}