import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import article1 from "../../public/images/articles/baibao1.jpg";
import article2 from "../../public/images/articles/baibao2.jpg";
import { motion } from "framer-motion";
import article3 from "../../public/images/articles/baibao3.jpg";
import { useMotionValue } from "framer-motion";
import { useRef } from "react";
import article4 from "../../public/images/articles/baibao4.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);
const MovingImage = ({ title, img, link }) => {

const x = useMotionValue(0);
const y = useMotionValue(0);
const imgRef = useRef(null);
function handleMouse(event) {
imgRef.current.style.display = "inline-block";
x.set(event.pageX);
y.set(-10);
}
function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
    }



  return (
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
      style={{x:x,y:y}}

      initial={{opacity:0}}
      whileInView={{opacity:1 , transition:{duration:0.2}}}
    
      
      
      ref={imgRef}
        src={img}
        alt={title}
        className=" z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        
      />
    </Link>
  );
};
const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0 , transition:{duration:0.5,ease:"easeInOut"}}}
    viewport={{once:true}}
    className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light 
    sm:flex-col
    ">
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark rounded-[2rem] rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority 
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibol dark:text-primaryDark">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Kim Nga | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16
          
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          " />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Russian Military to Draft 133K Conscripts in Fall Call-Up"
              summary="Russia's Defense Ministry plans to enlist 133,000 young men for mandatory military service this fall and winter, bringing the total number of conscripts to 283,000 for 2024. Although conscripts are assured not to be deployed to Ukraine, the mandatory draft remains controversial due to its compulsory nature and severe penalties for evasion."
              time="5 min read"
              link="https://www.themoscowtimes.com/2024/09/30/russian-military-to-draft-133k-conscripts-in-fall-call-up-a86517"
              img={article1}
            />
            <FeaturedArticle
              title="Putin Says Russia Will Achieve 'All Goals Set' in War Against Ukraine"
              summary="Putin reiterated that Russia will achieve its goals in Ukraine, defending the invasion as protection for Russian speakers and criticizing Western influence in Ukraine, while marking the second anniversary of the annexation of four Ukrainian regions."
              time="9 min read"
              link="https://www.themoscowtimes.com/2024/09/30/putin-says-russia-will-achieve-all-goals-set-in-war-against-ukraine-a86514"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Russia Jails Ex-Editor of Youth Magazine DOXA 7 Years in Absentia for ‘Justifying Terrorism’"
              date="September 30, 2024"
              link="https://www.themoscowtimes.com/2024/09/30/russia-jails-ex-editor-of-youth-magazine-doxa-7-years-in-absentia-for-justifying-terrorism-a86521"
              img={article3}
            />
            <Article
              title="Elderly American Pleads Guilty to Fighting in Ukraine Against Russia"
              date="September 30, 2024"
              link="https://www.themoscowtimes.com/2024/09/30/elderly-american-pleads-guilty-to-fighting-in-ukraine-against-russia-a86515"
              img={article4}    
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
