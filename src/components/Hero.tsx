import { MailCheckIcon, GlobeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import styles from '@/styles/Hero.module.css'

function Navbar () {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div
      className="flex flex-col justify-start items-start gap-0 w-full h-full"
    >
      <div 
        className="w-full h-full flex grow flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 border-solid border-2 border-black px-[1rem] md:px-[2rem] py-[3rem] font-medium text-lg"
      >
        <Link
          href="/"
          > Rosebud AI x Palak
        </Link>

        <div 
          className="flex flex-row justify-center items-center gap-8"
        >
          
          {/* navbar links */}
          <div
            className="hidden xl:flex flex-row gap-8 justify-center items-center"
          >
            <Link
              href="#developer"
              > Frontend Dev
            </Link>

            <Link
              href="#community"
              > Community
            </Link>

            <Link
              href="https://palakjain.hashnode.dev/"
              > Blog
            </Link>

          </div>

          {/* contact icons */}
          <div
            className="flex flex-row gap-2 justify-center items-center"
          >
            <Link
              className={styles['contactIcon']}
              href="mailto:palakb188@gmail.com"
            >
              <MailCheckIcon size={20} />
            </Link>

            <Link
              className={styles['contactIcon']}
              href='https://heypalakjain.vercel.app/'
            >
              <GlobeIcon size={20} />
            </Link>

          </div>
        </div>
        
        {/* dropdown */}
        <button
          onClick={() => setIsClicked(!isClicked)}
          className={`flex xl:hidden border-2 border-black px-2 text-3xl
          ${isClicked ? "bg-yellow" : "bg-white"}`}
        >  =
        </button>

      </div>

      {/* dropdown content */}
      <div
        className={`z-10 flex flex-col justify-start items-start w-full
        ${isClicked ? "flex" : "hidden"}
        `}
      >
        <Link
          href="#developer"
          className={styles['dropdownContent']}
          > Developer
        </Link>

        <Link
          href="#community"
          className={styles['dropdownContent']}
          > Community
        </Link>

        <Link
          href="https://palakjain.hashnode.dev/"
          className={styles['dropdownContent']}
          > Blog
        </Link>
      </div>
    </div>
  )
}

function Featured () {

  return (
    <div
      className="flex flex-row flex-wrap justify-center items-center w-full"
    >
      <div
        className={`${styles['featuredItem']} border-l-2`}
      >
        <Image 
          src="/gdsc.svg"
          alt="Google Developer Student Clubs"
          width={200}
          height={200}
          className="h-1/2 w-auto"
          title="Google Developer Student Clubs"
        />
      </div>

      <div
        className={styles['featuredItem']}
      >
        <Image 
          src="/figma.svg"
          alt="Friends of Figma"
          width={200}
          height={200}
          className="h-1/2 w-auto"
          title="Friends of Figma"
        />
      </div>

      <div
        className={` ${styles['featuredItem']} border-l-2 xl:border-l-0`}
      >
        <Image 
          src="/tymely.svg"
          alt="Tymely"
          width={200}
          height={200}
          className="h-1/2 w-auto"
          title="Tymely"
        />
      </div>

      <div
        className={styles['featuredItem']}
      >
        <Image 
          src="/recruitify.svg"
          alt="recruitify"
          width={200}
          height={200}
          className="h-1/2 w-auto"
          title="Recruitify"
        />
      </div>
    </div>
  )
}

export default function Hero () {
  
  return (
    <div 
      className="flex flex-col justify-start items-start w-full h-full"
    >
      <Navbar />
      
      <div
        className="flex flex-col xl:flex-row justify-start items-center w-full border-2 border-black border-t-0"
      >
        {/* text */}
        <div
          className="flex flex-col gap-8
           justify-start items-start w-full xl:w-1/2 px-[1rem] md:px-[2rem] xl:px-[5rem] py-[4rem] xl:py-[5rem] text-gray-800 font-bold"
        >
          <h1
            className="text-3xl md:text-4xl leading-[2.3rem] md:leading-[2.9rem]"
          >
            Palak, Developer. Writes Code, Ready to Work Hard, Have Fun and Make History.
          </h1>

          <h3
            className="text-2xl md:text-3xl"
          >
            Craft a great team with Palak.
          </h3>

          <p
            className="text-lg md:text-xl"
          >
            Go from task description to clean code to bug-free deployments.
          </p>

          {/* buttons */}
          <div
            className="flex flex-row flex-wrap gap-4 justify-start items-center"
          >
            <Link
              href="https://drive.google.com/file/d/109X5iBnLwbzGsljDcr7-uo81LH6KcsiI/view?usp=drive_link"
              className="buttonStyle"
            >
              <button>
                View Resume
              </button>
            </Link>

            <Link
              href="https://heypalakjain.vercel.app/"
              className="buttonStyle"
            >
              <button>
                Learn More
              </button>
            </Link>

          </div>
        </div>

        {/* image */}
        <div
          className="w-full xl:w-1/2 flex justify-center items-center border-t-2 xl:border-l-2 xl:border-t-0 border-black"
        >
          <Image 
            src="/heroImg.svg"
            alt="hero image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
      </div>
      <Featured />
    </div>
  )
}