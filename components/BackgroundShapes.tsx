"use client"

export function BackgroundShapes() {
  return (
    <div className="container relative flex items-center justify-center w-full max-w-5xl h-full aspect-square mx-auto">
      <div className="flex flex-col justify-between items-center w-full h-full pt-40 pb-12">
        <div className="flex justify-center items-center w-full">
          <div className="w-[212px] h-[190px] animate-spin-reverse-slowest bg-neogreen/10" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
        </div>

        <div className="flex justify-center items-start w-full">
          <div className="w-[212px] h-[100px] box-content animate-spin-slow 
          before:content-[''] before:absolute before:top-0 before:left-0 
          before:h-[60px] before:w-[60px] before:border-[20px] 
          before:border-neopink/10 before:border-solid before:rounded-t-[50px] 
          before:rounded-tr-[50px] before:rounded-b-0 before:rounded-l-[50px] 
          before:-rotate-45 before:box-content 
          after:content-[''] after:absolute after-top-0 after:right-0 
          after:left-auto after:h-[60px] after:w-[60px] after:border-[20px] 
          after:border-neopink/10 after:border-solid after:rounded-t-[50px] 
          after:rounded-r-[50px] after:rounded-b-0 after:rounded-l-0 
          after:rotate-45 after:box-content">
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="w-[212px] aspect-3/2 bg-neoblue/10 animate-spin-slower" />
        </div>

        <div className="flex justify-center items-start w-full">
          <div className="w-[212px] aspect-square rounded-full border-12 border-neoyellow/10 animate-spin-medium" />
        </div>

        <div className="hidden top-[-3em] w-0 h-0 border-t-[50px] animate-spin-reverse-slower 
 border-t-transparent border-solid border-x-transparent  border-x-[3em]  
 border-b-[1.25em] border-neopink/10

afte:content-none after:absolute after:left-[-3em] after:top-[1.25em]
after:h-0 after:w-0 after:border-b-[3em] after:border-solid 
after:border-x-transparent after:border-b-transparent after:border-x-[3em] 
after:border-t-[4.4em] after:border-t-neopink/10
"></div>

        <div className="hidden justify-center items-center w-full">
          <div className="w-[23%] md:w-[13%] aspect-square bg-neoblue/10 animate-spin-reverse-slower" />
        </div>

        <div className="flex justify-center items-start w-full">
          <div className="w-[10%] md:w-[5%] aspect-square bg-neoviolet/10 rounded-sm animate-spin-medium origin-center rotate-45" />
        </div>


        <div className="hidden justify-center items-start w-full">
          <div className="w-[96px] box-content h-[48px] bg-neoyellow border-solid animate-spin-slow 
border-neoviolet border-x-2 border-t-2 border-b-[50px] rounded-full relative 

before:content-[''] before:absolute before:top-[50%] before:left-0
before:bg-neoviolet before:border-[18px] before:border-neoyellow 
before:border-solid before:rounded-full before:h-[12px] before:w-[12px] 
before:box-content 

after:content-[''] after:absolute after:top-[50%] after:left-[50%] 
after:bg-neoyellow after:border-[18px] after:border-neoviolet after:border-solid 
after:rounded-full after:h-[12px] after:w-[12px] after:box-content">
          </div>
        </div>
      </div>
    </div>
  )
}
