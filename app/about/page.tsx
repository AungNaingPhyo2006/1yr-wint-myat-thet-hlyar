import Image from 'next/image'
import location from "../../public/assets/images/home/second_page.png";
import Link from "next/link";


const About = () => {
  return (
      <main className="bg-[#fefaf8]  w-full h-full absolute top-0 bottom-0 -z-1 overflow-x-hidden">
      <section className='relative flex justify-center'>

        <div >
            <Image
                  src={location}
                  alt="Ma Wint Myat Thet Lyar's First Image"
                  width={600}
                  placeholder='blur'
                  height={200}
                  className='rounded-xl'
                />
        </div>
        <Link
            href="/"
            className="absolute top-[520px] sm:top-[520px] md:top-[750px]  bg-[#AE4890] text-white flex  items-center justify-center rounded-[50px] w-[150px] h-[50px] active:bg-[#e992b0]"
          >
           Done
          </Link>
            </section>

      </main>
  );
}

export default About;