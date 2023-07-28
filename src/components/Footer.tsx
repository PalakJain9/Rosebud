import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Footer.module.css"

function Contact () {

  return (
    <div 
      className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-[1rem] md:px-[2rem] xl:px-[5rem] py-[4rem] xl:py-[5rem] border-black border-2 border-t-0"
    >
      <div
        className="w-full md:w-1/3 flex flex-col justify-start items-start gap-3 text-sm"
      >
        <p
          className="font-medium text-lg"
        >
          Rosebud AI x Palak
        </p>

        <p>
          This website is inspired from rosebud.ai
        </p>

        <Link
          href='https://github.com/PalakJain9/Rosebud'
          className="underline underline-offset-4 hoverYellow"
        >
          view source code here
        </Link>
      </div>

      {/* links */}
      <div
        className="flex flex-row justify-end items-start gap-10"
      >
        <div
          className={styles['linkContainer']}
        >
          <p
            className="font-bold"
          >
            Resources
          </p>
          <Link
            href='https://docs.google.com/document/d/1AE-4fha5SdeQGl05xM8tm06mxBEo5aZMaVrAYesC0HY/edit?usp=sharing'
            className="hoverYellow"
          >
            Rosebud AI Feedback
          </Link>

          <Link
            href='https://palakjain.hashnode.dev/'
            className="hoverYellow"
          >
          Blog
          </Link>

          <Link
            href='https://heypalakjain.vercel.app/'
            className="hoverYellow"
          >
            Portfolio
          </Link>
        </div>

        <div
          className={styles['linkContainer']}
        >
          <p
            className="font-bold"
          >
            Contact
          </p>
          <Link
            href='mailto:palakb188@gmail.com'
            className="hoverYellow"
          >
            Email
          </Link>
          
            <Link
            href='https://www.linkedin.com/in/palakjain9'
            className="hoverYellow"
          >
            LinkedIn
          </Link>
          
            <Link
            href='https://github.com/PalakJain9'
            className="hoverYellow"
          >
            GitHub
          </Link>

        </div>

      </div>
    </div>
  )
}

export default function Footer () {
  return (
    <div
      className="flex flex-col justify-start items-start w-full h-full"
    >
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
            Let&apos;s take Rosebud AI to greater heights.
          </h1>

          <Link
            href='mailto:palakb188@gmail.com'
            className="buttonStyle"
          >
            <button>
              Hire Palak
            </button>
          </Link>
        </div>

        {/* image */}
        <div
          className="w-full xl:w-1/2 flex justify-center items-center border-t-2 xl:border-l-2 xl:border-t-0 border-black"
        >
          <Image 
            src="/portfolioHero.svg"
            alt="portfolio hero"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div>
      </div>
      <Contact />
    </div>
  )
}