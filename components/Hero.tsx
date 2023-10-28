import Image from 'next/image';

function Hero() {
  return (
    <>
      <div className="flex flex-wrap mt-10">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold">
                wypen<span className="text-blue-400">.</span>
              </div>
              <div></div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-3xl">
                  <span className="text-blue-400">Sustainability</span> meets Innovation.
                </h1>
                <div className="w-20 h-2 bg-blue-400 my-4"></div>
                <p className="mb-10">
                  We&apos;re dedicated to making a difference by embracing eco-friendly practices and paving the way for a greener future. Explore our range of environmentally conscious products and initiatives, designed to minimize our carbon footprint while maximizing positive impact.
                </p>
                <button className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                  Learn More
                </button>
              </div>
            </header>
          </div>
        </div>
        <div className="w-full sm:h-screen sm:w-4/12">
          <Image
            src="/chris-lee-70l1tDAI6rM-unsplash.jpg"
            alt="Leafs"
            layout="responsive"
            width={300}
            height={500}
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
