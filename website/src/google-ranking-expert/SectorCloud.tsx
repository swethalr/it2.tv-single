import { motion } from 'framer-motion';

const categories = [
  'Real Estate',
  'Medical',
  'Lawyers',
  'Dental',
  'HVAC',
  'Plumbing',
  'Roofing',
  'E-commerce',
  'SaaS',
  'Hospitality',
  'Automotive',
  'Education',
]; // Add all your sectors here

export const SectorCloud = () => {
  return (
    <section className="overflow-hidden bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h3 className="h3 text-white">
            Sectors We <span className="text-[#3cb878]">Dominate</span>
          </h3>
          <p className="p mt-4 text-slate-400">
            Expert rankings across 200+ specialized industries.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: '#3cb878' }}
              className="cursor-default rounded-full border border-slate-700 px-6 py-2 text-sm font-bold uppercase tracking-widest text-slate-300 transition-colors hover:text-white"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
