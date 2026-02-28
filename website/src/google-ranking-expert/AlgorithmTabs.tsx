import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Cpu, ShieldCheck, Code2, Zap } from 'lucide-react';

export const AlgorithmTabs = ({ algoData }: { algoData: any }) => {
  const [activeTab, setActiveTab] = useState('AI Models');

  const menuItems = [
    { label: 'AI Models', val: 'RankBrain / BERT', icon: <Cpu size={24} /> },
    {
      label: 'Core Signals',
      val: 'E-E-A-T Compliance',
      icon: <ShieldCheck size={24} />,
    },
    {
      label: 'Technical',
      val: 'MUM & Indexability',
      icon: <Code2 size={24} />,
    },
    {
      label: 'User Experience',
      val: 'Core Web Vitals',
      icon: <Zap size={24} />,
    },
  ];

  return (
    <section id="algorithm-factors" className="overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 space-y-4 text-center"
        >
          <h5 className="h5 uppercase tracking-[0.2em] text-[#3cb878]">
            Decoding the Search Engine
          </h5>
          <h3 className="h3 leading-[0.9] tracking-tighter text-slate-900">
            Factors of{' '}
            <span className="text-[#3cb878]">Google Rank Algorithm</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h4 className="h4 italic tracking-tight text-[#3cb878]">
                    {algoData[activeTab].title}
                  </h4>
                  <div className="h-1.5 w-20 rounded-full bg-slate-900" />
                </div>
                <p className="p font-medium leading-relaxed text-slate-600">
                  {algoData[activeTab].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="order-1 space-y-4 lg:order-2 lg:col-span-5">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.label)}
                className={`group flex w-full items-center justify-between rounded-[2rem] border p-6 transition-all duration-500 ${activeTab === item.label ? 'border-[#3cb878] bg-[#3cb878]' : 'border-slate-100 bg-white hover:border-[#3cb878]'}`}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${activeTab === item.label ? 'bg-white text-[#3cb878]' : 'bg-slate-900 text-[#3cb878]'}`}
                  >
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p
                      className={`mb-2 text-[14px] font-bold uppercase tracking-widest ${activeTab === item.label ? 'text-[#dbffec]' : 'text-slate-700'}`}
                    >
                      {item.label}
                    </p>
                    <p
                      className={`p font-bold ${activeTab === item.label ? 'text-white' : 'text-slate-900'}`}
                    >
                      {item.val}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className={
                    activeTab === item.label
                      ? 'translate-x-2 text-white'
                      : 'text-slate-200'
                  }
                  size={20}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
