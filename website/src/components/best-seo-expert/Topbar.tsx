'use client';

export default function TopBar() {
  return (
    <div className="relative z-[1000] flex h-[40px] w-full items-center bg-[#1a1a1a]">
      <div className="container mx-auto flex items-center justify-between px-10 text-[11px] font-bold uppercase tracking-widest text-white/70">
        <div className="flex gap-4">
          <span>Live Chat with Expert | enquiry@it2.tv</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Follow us:</span>
          <div className="flex gap-3 text-white">G f T in</div>
        </div>
      </div>
    </div>
  );
}
