import Header from '@/components/header/Header';
// import { BackgroundShapes } from '@/components/BackgroundShapes';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Students } from '@/components/Students';
import { Instructors } from '@/components/Instructors';
import { Footer } from '@/components/Footer';
import { Benefits } from '@/components/Benefits';

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        {/* Background with shapes */}
        {/* <div className="absolute inset-0 -z-10 h-full">
          <BackgroundShapes />
        </div> */}
        <Hero />
        <About />
        <div className="w-full bg-neoviolet text-white">
          <Students />
        </div>
        {/* <div className="w-full bg-neogreen text-primary"> */}
        <Instructors />
        {/* </div> */}
        <div className="w-full bg-neoblue">
          <Benefits />
        </div>
        <Footer />
      </div>
    </>
  );
}
