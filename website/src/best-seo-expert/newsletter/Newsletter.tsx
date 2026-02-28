import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-[#3cb878] py-16">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-4 md:flex-row">
        <div className="text-center text-white md:text-left">
          <h4 className="text-3xl font-bold">Email Newsletters!</h4>
          <p className="mt-1 text-white/80">
            Sign up for new updates & offers.
          </p>
        </div>
        <form className="flex w-full shadow-2xl md:w-auto">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full rounded-l-md p-5 text-gray-800 outline-none md:w-80"
          />
          <button className="rounded-r-md bg-gray-900 px-8 py-5 font-bold uppercase text-white transition-all hover:bg-black">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
