import Image from "next/image";
import Link from "next/link";

export default function Developer () {
  let buttonStyle = "bg-yellow hover:bg-gray-800 text-gray-800 hover:text-yellow px-4 py-2 border-2 border-black";
  let itemStyle = "w-full md:w-1/2 h-[27rem] flex flex-col justify-center items-center border-black border-b-2 p-[0.5rem]";
  let imgContainerStyle = "absolute top-0 h-1/2 w-full flex justify-center items-center border-b-2 border-black";
  let taskDescpStyle = "h-1/2 w-full text-xl font-bold flex flex-col justify-center items-start gap-4 p-[1rem] absolute left-0 right-0 bottom-0";

  return (
    <div
      className="flex flex-col lg:flex-row justify-start items-center w-full border-2 border-black border-t-0"
    >
      {/* text */}
      <div
        className="flex flex-col gap-3
        justify-start items-start w-full lg:w-1/2 px-[1rem] md:px-[2rem] lg:px-[5rem] py-[4rem] lg:py-[5rem] text-gray-800 font-bold"
      >
        <h1
          className="text-2xl md:text-3xl"
        >
          Palak Jain: Frontend Developer
        </h1>

        <h3
          className="text-xl md:text-2xl text-gray-600"
        >
          1+ years of experience in full-stack development with a focus on frontend.
        </h3>

        {/* buttons */}
        <div
          className="flex flex-col lg:flex-row flex-wrap gap-4 justify-start items-start pt-[3rem]"
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

      {/* image grid */}
      <div
        className="w-full lg:w-1/2 border-t-2 lg:border-l-2 lg:border-t-0 border-black flex flex-row flex-wrap justify-center items-center"
      >
        {/* item 1 */}
        <div
          className={`${itemStyle} relative md:border-r-2`}
        >
          <div
            className={imgContainerStyle}
          >
            <Image 
              src="/tymelyHero.PNG"
              alt="tymely"
              width={1024}
              height={1024}
              className="h-full w-auto"
            />
          </div>
          
          <div
            className={taskDescpStyle}
          >
            <p>
              Frontend Developer: Tymely
            </p>
            <p
              className="text-gray-600 text-lg"
            >
              Skills: Next.js, TypeScript, Tailwind CSS, React, Open AI, Figma, MySQL, Git, GitHub
            </p>
          </div>

        </div>

        {/* item 2 */}
        <div
          className={`${itemStyle} relative`}
        >
          <div
            className={imgContainerStyle}
          >
            <Image 
              src="/developerDays.png"
              alt="Developer Days Hackathon"
              width={1024}
              height={1024}
              className="h-3/4 w-auto"
            />
          </div>
          
          <div
            className={taskDescpStyle}
          >
            <p>
              Top 15 in UI/UX Hackathon
            </p>
            <p
              className="text-gray-600 text-lg"
            >
              Skills: Responsive Web Design, Figma, Moodboards, High-level &amp; low-level Prototyping
            </p>
          </div>

        </div>

        {/* item 3 */}
        <div
          className={`${itemStyle} relative md:border-r-2`}
        >
          <div
            className={imgContainerStyle}
          >
            <Image 
              src="/bnlw.png"
              alt="Banasthali Vidyapith"
              width={1024}
              height={1024}
              className="h-5/6 w-auto"
            />
          </div>
          
          <div
            className={taskDescpStyle}
          >
            <p>
              Full Stack Developer: Banasthali Vidyapith
            </p>
            <p
              className="text-gray-600 text-lg"
            >
              Skills: React, Node.js, MongoDB, Express.js, Mongoose, Figma, Git, GitHub
            </p>
          </div>

        </div>


        {/* item 4 */}
        <div
          className={`${itemStyle} relative border-b-0`}
        >
          <div
            className={imgContainerStyle}
          >
            <Image 
              src="/recruitifyHero.PNG"
              alt="recruitify"
              width={1024}
              height={1024}
              className="h-full w-full"
            />
          </div>
          
          <div
            className={taskDescpStyle}
          >
            <p>
              Building Recruitify
            </p>
            <p
              className="text-gray-600 text-lg"
            >
              Skills: Next.js, TypeScript, Tailwind CSS, React, MongoDB, Prisma, NextAuth
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}