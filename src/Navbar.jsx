const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const Navbar = () => {
  return (
    <nav className="glass-nav absolute top-3.5 left-1/2 -translate-x-1/2 w-[95%] max-w-[1100px] flex justify-between items-center px-5 md:px-10 py-3 md:py-5 rounded-full z-50">
      
      <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[color:var(--fg)] relative z-10">DevKrafto</h3>
      
      {/* Links 
      
      <div className='hidden md:flex items-center text-white gap-7 font-bold'>
        <h2 className="font-['Space_Grotesk'] cursor-pointer hover:text-[#BA9EFF] transition">Who We Are</h2>
        <h2 className="font-['Space_Grotesk'] cursor-pointer hover:text-[#BA9EFF] transition">What We Do</h2>
        <h2 className="font-['Space_Grotesk'] cursor-pointer hover:text-[#BA9EFF] transition">Contact Us</h2>
      </div>*/}

      <button
        onClick={handleScrollToContact}
        className="font-['Space_Grotesk'] px-4 md:px-6 py-2 bg-[color:var(--accent)] text-black text-[10px] md:text-sm font-black uppercase tracking-tighter md:tracking-normal rounded-full md:rounded-xl transition-transform active:scale-95"
      >
        INITIATE PROTOCOL
      </button>
    </nav>
  )
}

export default Navbar
