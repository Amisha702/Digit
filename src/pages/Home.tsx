const Home = () => {
  return (
    <div className='group'>
      <div className='overflow-hidden h-52 relative'>
        <img
          src={"image"}
          alt={"destination"}
          className='absolute size-full object-cover group-hover:scale-105 transition-transform duration-500'
        />
      </div>
      <div className='w-[90%] mx-auto bg-background rounded-md -translate-y-[42%] overflow-hidden shadow-md'>
        <div className='clip w-fit bg-primary min-w-4/5 p-3 text-primary-foreground font-semibold group-hover:bg-gray-800 transition-colors duration-500'>
          {"destination"}
        </div>
        {/* <Link to='/' className='px-2 py-4 flex items-center justify-between'>
          View All Tours
          <div className='p-2 rounded-full grid place-content-center bg-gray-100 group-hover:bg-primary/60 group-hover:text-primary-foreground transition-colors duration-300'>
            <ArrowRight size={18} />
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
