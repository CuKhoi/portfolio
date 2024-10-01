import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref=useRef(null); 
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between items-center md:w-[80%]">
      <LiIcon reference ={ref} />
      
      <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:'spring'}}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />



        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Sales - Brand Abassador"
            company="Tam An Natural"
            companyLink="https://tamannatural.com/"
            time="2022-2024"
            address="Ho Chi Minh City, Vietnam"
            work="Worked as a Sales Brand Ambassador at Tam An Natural, responsible for promoting and selling products, 
                building and maintaining customer relationships, and contributing to the development of sales strategies."
          />
          <Details
            position="Teaching Assistant"
            company="Vinalearn"
            companyLink="https://www.vinalearn.com/"
            time="2023-Present"
            address="Ho Chi Minh City, Vietnam"
            work="Assisted in the development and implementation of lesson plans, provided support to lead teachers in classroom management, 
                and helped students with their academic and personal growth through one-on-one tutoring and mentoring."
          />
          <Details
            position="Contributor"
            company="Japan- Vietnam Festival"
            companyLink="https://japan-vietnam-festival.jp/"
            time="2024"
            address="Ho Chi Minh City, Vietnam"
            work="Contributed to the Japan-Vietnam Festival by assisting in event planning, coordinating with vendors and participants, 
                and promoting cultural exchange activities to enhance the festival experience for attendees."
          />
        <Details
            position="Collaborator"
            company="Hawa Expo"
            companyLink="https://www.hawaexpo.com/"
            time="2022-Present"
            address="Ho Chi Minh City, Vietnam"
            work="Collaborated with Hawa Expo by assisting in event planning, coordinating with vendors and participants, 
                and promoting the expo to enhance the experience for attendees."
          />
        
        </ul>
      </div>
    </div>
  );
};

export default Experience;
