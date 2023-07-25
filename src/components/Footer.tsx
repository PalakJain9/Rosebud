import Image from "next/image";
import Link from "next/link";

function Contact () {
  const linkStyle = "w-1/2 flex flex-col justify-end items-start gap-3 md:text-lg"

  return (
    <div 
      className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-[1rem] md:px-[2rem] xl:px-[5rem] py-[4rem] xl:py-[5rem] border-black border-2"
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
          This website is inspired from <Link
            href='https://www.rosebud.ai/'
            className="underline underline-offset-4"
          >
            rosebud.ai
          </Link>
        </p>
      </div>

      {/* links */}
      <div
        className="flex flex-row justify-end items-start gap-10"
      >
        <div
          className={linkStyle}
        >
          <p
            className="font-bold"
          >
            Resources
          </p>
          <Link
            href='/'
          >
            Rosebud AI Feedback
          </Link>

          <Link
            href={'/'}
          >
          Blog
          </Link>

          <Link
            href={'/'}
          >
            Portfolio
          </Link>
        </div>

        <div
          className={linkStyle}
        >
          <p
            className="font-bold"
          >
            Contact
          </p>
          <Link
            href={'/'}
          >
            Email
          </Link>
          
            <Link
            href={'/'}
          >
            LinkedIn
          </Link>
          
            <Link
            href={'/'}
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
            Let's take Rosebud AI to greater heights.
          </h1>

          <Link
            href="/resume.pdf"
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