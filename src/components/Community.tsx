import Image from "next/image";
import Link from "next/link";

export default function Community() {
  return (
    <div 
      id="community"
      className="flex flex-col xl:flex-row justify-start items-center w-full border-2 border-black border-t-0">
      
      {/* grid */}
      <div
        className="w-full xl:w-[calc((100%/2)+0.15rem)] h-full flex flex-row xl:flex-col justify-center items-center border-b-2 border-black xl:border-b-0 xl:border-r-2"
      >
        <div
          className="w-full h-[10rem] xl:h-[20rem] flex justify-center items-center border-black xl:border-b-2 border-r-2 xl:border-r-0"
        >
          <Image 
            src="/gdsc.svg"
            alt="Google Developer Student Clubs"
            width={200}
            height={200}
            className="h-2/3 xl:h-1/3 w-auto p-[0.5rem] xl:p-[0rem]"
          />
        </div>

        <div
          className="w-full h-[10rem] xl:h-[20rem] flex justify-center items-center"
        >
          <Image 
            src="/figma.svg"
            alt="figma"
            width={200}
            height={200}
            className="h-1/3 xl:h-1/5 w-auto p-[0.5rem] xl:p-[0rem]"
          />
        </div>
      </div>

      {/* text */}
      <div
        className="h-full flex flex-col gap-4
        justify-start items-start w-full xl:w-1/2 px-[1rem] md:px-[2rem] xl:px-[5rem] py-[4rem] xl:py-[5rem] text-gray-600 font-bold"
      >
        <h1
          className="text-3xl md:text-4xl text-gray-800"
        >
          Palak Jain: A Great Leader &amp; An Excellent Team Player
        </h1>
        <p>
          Encouraged 2000+ women to learn new technologies and strengthened the technical community by 31% by leading a team of 14 women and  delivering 5+ tutorials on Algorithms, 30+ high-quality content on various technologies and by successfully organizing 6+ mega
          events, including Flutter Festival, 30 Days of Google Cloud, etc.
        </p>
        
        <Link
          href="https://www.linkedin.com/in/palakjain9"
        >
          <button
            className="buttonStyle mt-[3rem]"
          >
            Learn More
          </button>
        </Link>
      </div>
    </div>
  )
}