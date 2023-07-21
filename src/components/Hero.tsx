import { MailCheckIcon, GithubIcon, LinkedinIcon } from "lucide-react"
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
        className="w-full h-full flex grow flex-row justify-between items-center gap-2 border-solid border-2 border-black p-[2rem] py-[3rem] font-medium text-lg"
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


export default function Hero () {
  return (
    <div 
      className="flex flex-col justify-start items-start w-full h-full"
    >
      <Navbar />
    </div>
  )
}