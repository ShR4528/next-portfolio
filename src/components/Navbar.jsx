import Link from 'next/link';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 lg:px-20 xl:px-48'>
      {/* plogo */}
      <div className=''>
        <Link
          href='/'
          passHref
          className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white mr-1'>Sham</span>
          <span className='w-12 h-3 rounded bg-white text-black flex items-center justify-center'>
            .sr
          </span>
        </Link>
      </div>

      {/* responsive menu */}
      <div>
        {/* menu button */}
        <button className='w-10 h-8 flex  flex-col justify-between'>
          <div className='w-10 h-1 bg-black rounded'>Home</div>
          <div className='w-10 h-1 bg-black rounded'></div>
          <div className='w-10 h-1 bg-black rounded'></div>
        </button>
        {/* menu list */}
        <div className='absolute top-0 left-0 w-screen h-screen bg-red text-white'>
          {links.map((link) => {
            <Link href={link.url} key={link.title}>
              {link.title}
            </Link>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
