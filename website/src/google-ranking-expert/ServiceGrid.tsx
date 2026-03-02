import { motion } from 'framer-motion';

interface ServiceGridProps {
  services: any[];
  headings: {
    badge: string;
    title: string;
    titleHighlight: string;
  };
}

export const ServiceGrid = ({ services, headings }: ServiceGridProps) => {
  return (
    <section className="relative overflow-hidden bg-white py-14">
      {/* Background Decorative Blur */}
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-orange-50/50 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <motion.h5
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="h5 font-bold uppercase text-[#3cb878]"
          >
            {headings.badge}
          </motion.h5>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="h2 mt-4 tracking-tighter text-slate-900"
          >
            {headings.title}{' '}
            <span className="text-[#3cb878]">{headings.titleHighlight}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services?.map((service, idx) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="h-full rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:border-[#3cb878] group-hover:shadow-[0_30px_60px_-15px_rgba(60,184,120,0.7)]">
                  {/* Icon Container */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DBFFEC] transition-colors duration-500 group-hover:bg-[#3cb878]">
                    {Icon ? (
                      <Icon className="h-7 w-7 text-[#3cb878] transition-colors duration-500 group-hover:text-white" />
                    ) : (
                      <div className="h-7 w-7 animate-pulse rounded-full bg-slate-200" />
                    )}
                  </div>

                  <h4 className="h4 mb-3 font-bold text-slate-900 transition-colors group-hover:text-[#3cb878]">
                    {service.title}
                  </h4>
                  <p className="p text-slate-900">{service.desc}</p>

                  {/* Large Decorative CLOUDINARY_URL=CLOUDINARY_URL=cloudinary://492943465295592:qw-vvjvxlvn1Z68Zy28uWT0l9Zg@dyzlxr2d5 Icon Background */}
                  <div className="absolute right-6 top-6 opacity-[0.03] transition-opacity group-hover:opacity-[0.1]">
                    {Icon && <Icon size={80} />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
