import Image from "next/image";
import Link from "next/link";

export default function Developer () {
  let buttonStyle = "bg-yellow hover:bg-gray-800 text-gray-800 hover:text-yellow px-4 py-2 border-2 border-black";
  let itemStyle = "w-full md:w-1/2 h-[28rem] md:h-[21rem] lg:h-[24rem] flex flex-col justify-center items-center border-black border-b-2 p-[0.5rem]";
  let taskDescpStyle = "h-3/5 w-full text-xl font-bold flex flex-col justify-center items-start gap-4 p-[1rem]";
  let highlightTextStyle = "text-black font-extrabold";

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
        className="w-full lg:w-1/2 border-t-2 lg:border-l-2 lg:border-t-0  border-black flex flex-row flex-wrap justify-center items-center"
      >
        {/* item 1 */}
        <div
          className={`${itemStyle} md:border-r-2`}
        > 
          <div
            className={taskDescpStyle}
          >
            <p>
              Frontend Developer: Tymely
            </p>
            <p
              className="text-gray-600 text-base"
            >
              Enhanced user engagement by <span className={highlightTextStyle}>31%</span> by building a dynamic priority task list, allowing users to enter, reorder, and delete
              tasks. Onboarded <span className={highlightTextStyle}>280</span> users within <span className={highlightTextStyle}>21</span> days of deployment by utilizing Next.js 13 server-side rendering (SSR) techniques for
              better performance.
            </p>
          </div>

        </div>

        {/* item 2 */}
        <div
          className={`${itemStyle}`}
        >
          <div
            className={taskDescpStyle}
          >
            <p>
              Top 15 in UI/UX Hackathon
            </p>
            <p
              className="text-gray-600 text-base"
            >
              Crafted user-centric interfaces, researched users to develop high and low level prototypes for a car pool app. Emerged in top <span className={highlightTextStyle}>15</span> out of total <span className={highlightTextStyle}>124</span> participants nationwide from the UI/UX category in a national level hackathon.
            </p>
          </div>

        </div>

        {/* item 3 */}
        <div
          className={`${itemStyle} md:border-r-2 md:border-b-0`}
        >
          <div
            className={taskDescpStyle}
          >
            <p>
              Full Stack Developer: Banasthali Vidyapith
            </p>
            <p
              className="text-gray-600 text-base"
            >
              Improved experience for <span className={highlightTextStyle}>16k+</span> students by developing a responsive web application. And accelerated user engagement by <span className={highlightTextStyle}>15%</span> by building an article saving system, enabling users to refer their saved content
              anytime and anywhere.
            </p>
          </div>

        </div>


        {/* item 4 */}
        <div
          className={`${itemStyle} border-b-0`}
        >
          <div
            className={taskDescpStyle}
          >
            <p>
              Building Recruitify
            </p>
            <p
              className="text-gray-600 text-base"
            >
              Reduced setup time of placement portals by <span className={highlightTextStyle}>100%</span> by designing and developing a user friendly web application to enable colleges to setup their placement portals in no time. Increased search relevance by up to <span className={highlightTextStyle}>15%</span> by designing a tag-based filtering UI using React.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}