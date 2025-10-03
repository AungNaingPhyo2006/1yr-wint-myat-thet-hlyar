import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import home_one_img from "../public/assets/images/home/home1.jpg";
import invitation from "../public/assets/images/home/first_page.png";
import home_three_img from "../public/assets/images/home/home3.jpg";
import Link from 'next/link';

export default function Home() {

  return (
    <main className=" w-full h-full bg-[#fefaf8] absolute top-0 bottom-0 -z-1 ">
      <section className="relative flex justify-center">
              <div>
                <Image
                  src={invitation}
                  alt="Ma Wint Myat Thet Hlyar's First Image"
                  width={600}
                  placeholder='blur'
                  height={200}
                  className='rounded-xl'
                />
              </div>
              <Link
            href="/about"
            className="absolute top-[550px] sm:top-[550px] md:top-[750px]  bg-[#AE4890] text-white flex  items-center justify-center rounded-[50px] w-[150px] h-[50px] active:bg-[#e992b0]"
          >
            Next
          </Link>
          </section>
      </main>
  )
}
