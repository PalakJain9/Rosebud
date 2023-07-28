import Link from "next/link";
import styles from '@/styles/Developer.module.css';

export default function Developer () {
  
  return (
    <div
      id="developer"
      className="flex flex-col xl:flex-row justify-start items-center w-full border-2 border-black border-t-0"
    >
      {/* text */}
      <div
        className="flex flex-col gap-3
        justify-start items-start w-full xl:w-1/2 px-[1rem] md:px-[2rem] xl:px-[5rem] py-[4rem] xl:py-[5rem] text-gray-800 font-bold"
      >
        <h1
          className="text-3xl md:text-4xl"
        >
          Palak Jain: Frontend / Fullstack Developer
        </h1>

        <h3
          className="text-xl md:text-2xl text-gray-600"
        >
          1+ years of experience in full-stack development with a focus on frontend.
        </h3>

        {/* buttons */}
        <div
          className="flex flex-col xl:flex-row flex-wrap gap-4 justify-start items-start pt-[3rem]"
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
            href="https://github.com/PalakJain9"
            className="buttonStyle"
          >
            <button>
              Check GitHub
            </button>
          </Link>

        </div>
      </div>

      {/* grid */}
      <div
        className="w-full xl:w-1/2 border-t-2 xl:border-l-2 xl:border-t-0 border-black flex flex-row flex-wrap justify-center items-center"
      >
        {/* item 1 */}
        <div
          className={`${styles['gridItem']} md:border-r-2`}
        > 
          <div
            className={styles['taskDescp']}
          >
            <p>
              Frontend Developer: Tymely
            </p>
            <p
              className="text-gray-600 text-base"
            >
              Onboarded <span className={styles['highlightText']}>280</span> users within <span className={styles['highlightText']}>21</span> days of deployment and enhanced user engagement by <span className={styles['highlightText']}>31%</span> by building a dynamic priority task list, allowing users to enter, reorder, and delete
              tasks.
            </p>
          </div>

        </div>

        {/* item 2 */}
        <div
          className={`${styles['gridItem']}   border-t-2 md:border-t-0`}
        >
          <div
            className={styles['taskDescp']}
          >
            <p>
              Full Stack Developer: Banasthali Vidyapith
            </p>
            <p
              className="text-gray-600 text-base"
            >
              Improved experience for <span className={styles['highlightText']}>16k+</span> students and accelerated user engagement by <span className={styles['highlightText']}>15%</span> by building an article saving system, enabling users to refer their saved content
              anytime and anywhere.
            </p>
          </div>

        </div>

        {/* item 3 */}
        <div
          className={`${styles['gridItem']} md:border-r-2 border-t-2`}
        >
          <div
            className={styles['taskDescp']}
          >
            <p>
              Top 15 in UI/UX Hackathon
            </p>
            <p
              className="text-gray-600 text-base"
            >
              Crafted user-centric interfaces, researched users to develop prototypes for a car pool app. Emerged in top <span className={styles['highlightText']}>15</span> out of total <span className={styles['highlightText']}>124</span> participants of UI/UX category in a national level hackathon.
            </p>
          </div>

        </div>


        {/* item 4 */}
        <div
          className={`${styles['gridItem']} border-t-2`}
        >
          <div
            className={styles['taskDescp']}
          >
            <p>
              Building Recruitify
            </p>
            <p
              className="text-gray-600 text-base"
            >
              Reduced setup time of placement portals by <span className={styles['highlightText']}>100%</span> by designing and developing a user friendly web application to enable colleges to setup their placement portals in no time. Increased search relevance by up to <span className={styles['highlightText']}>15%</span> by designing a tag-based filtering UI using React.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}