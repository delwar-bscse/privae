import React from 'react';

const WelcomeHero = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-start justify-center bg-linear-to-b from-[#ff9a6a] to-[#ff7a45] px-8 md:px-20 lg:px-32">
      <div className="max-w-2xl space-y-6">
        {/* Logo / Brand Name */}
        <h2 className="text-3xl font-bold tracking-tighter text-white/90 md:text-4xl">
          PRIVAE
        </h2>

        {/* Main Heading */}
        <h1 className="flex items-center gap-4 text-4xl font-bold text-white md:text-5xl">
          Hi Chef 
          <span className="inline-block animate-bounce-subtle">👋</span>
        </h1>

        {/* Description */}
        <p className="max-w-lg text-lg leading-relaxed text-white/90 md:text-xl">
          Welcome to Privae Chef. The place to find and book 
          private chefs as a service
        </p>
      </div>
    </section>
  );
};

export default WelcomeHero;