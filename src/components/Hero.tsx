import { MailCheckIcon, GithubIcon, LinkedinIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

function Navbar () {
  const [isClicked, setIsClicked] = React.useState(false)

  let contactIconStyle = "border-2 border-black p-2 bg-white"
  let dropdownContentStyle = "w-full text-lg border-black border-t-2 border-l-2 border-r-2 p-[1rem] bg-white hover:bg-yellow"

  return (
    <div
      className="flex flex-col justify-start items-start gap-0 w-full h-full"
    >
      <div 
        className="w-full h-full flex grow flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-2 border-solid border-2 border-black px-[1rem] md:px-[2rem] py-[3rem] font-medium text-lg"
      >
        <Link
          href="/"
          > Rosebud AI x Palak Jain
        </Link>

        <div 
          className="flex flex-row justify-center items-center gap-8"
        >
          
          {/* navbar links */}
          <div
            className="hidden lg:flex flex-row gap-8 justify-center items-center"
          >
            <Link
              href="#dev"
              > Frontend Dev
            </Link>

            <Link
              href="#community"
              > Community
            </Link>

            <Link
              href="#dev"
              > Company
            </Link>

            <Link
              href="#blogs"
              > Blog
            </Link>

          </div>

          {/* contact icons */}
          <div
            className="flex flex-row gap-2 justify-center items-center"
          >
            <Link
              className={contactIconStyle}
              href="mailto:palakb188@gmail.com"
            >
              <MailCheckIcon size={20} />
            </Link>

            <Link
              className={contactIconStyle}
              href='https://www.linkedin.com/in/palakjain9'
            >
              <LinkedinIcon size={20} />
            </Link>

            <Link
              className={contactIconStyle}
              href='https://github.com/PalakJain9'
            >
              <GithubIcon size={20} />
            </Link>

          </div>
        </div>
        
        {/* dropdown */}
        <button
          onClick={() => setIsClicked(!isClicked)}
          className={`flex lg:hidden border-2 border-black px-2 text-3xl
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
          href="#dev"
          className={` ${dropdownContentStyle} border-t-transparent`}
          > Frontend Dev
        </Link>

        <Link
          href="#community"
          className={dropdownContentStyle}
          > Community
        </Link>

        <Link
          href="#dev"
          className={dropdownContentStyle}
          > Company
        </Link>

        <Link
          href="#blogs"
          className={` ${dropdownContentStyle} border-b-2`}
          > Blog
        </Link>
      </div>
    </div>
  )
}

function Featured () {
  let itemStyle = "w-1/2 lg:w-1/4 h-[10rem] flex justify-center items-center border-black border-b-2 border-r-2 p-[0.5rem]"

  return (
    <div
      className="flex flex-row flex-wrap justify-center items-center w-full"
    >
      <div
        className={` ${itemStyle} border-l-2`}
      >
        <Image 
          src="/gdsc.png"
          alt="Google Developer Student Clubs"
          width={200}
          height={200}
          className="h-1/2 w-auto"
          title="Google Developer Student Clubs"
        />
      </div>

      <div
        className={itemStyle}
      >
        <Image 
          src="/figma.png"
          alt="Friends of Figma"
          width={200}
          height={200}
          className="w-auto h-1/2"
          title="Friends of Figma"
        />
      </div>

      <div
        className={` ${itemStyle} border-l-2 lg:border-l-0`}
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
        className={itemStyle}
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
  let buttonStyle = "bg-yellow hover:bg-gray-800 text-gray-800 hover:text-yellow px-4 py-2 border-2 border-black"
  
  return (
    <div 
      className="flex flex-col justify-start items-start w-full h-full"
    >
      <Navbar />
      
      <div
        className="flex flex-col lg:flex-row justify-start items-center w-full border-2 border-black border-t-0"
      >
        {/* text */}
        <div
          className="flex flex-col gap-8
           justify-start items-start w-full lg:w-1/2 px-[1rem] md:px-[2rem] lg:px-[5rem] py-[4rem] lg:py-[5rem] text-gray-800 font-bold"
        >
          <h1
            className="text-3xl md:text-4xl leading-[2.3rem] md:leading-[2.9rem]"
          >
            Palak, Developer. Writes Code, Works Smart and Ready to Make History. 
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
              href="/resume.pdf"
              className={buttonStyle}
            >
              <button>
                View Resume
              </button>
            </Link>

            <Link
              href="/"
              className={buttonStyle}
            >
              <button>
                Learn More
              </button>
            </Link>

          </div>
        </div>

        {/* image */}
        <div
          className="w-full lg:w-1/2 flex justify-center items-center border-t-2 lg:border-l-2 lg:border-t-0 border-black"
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