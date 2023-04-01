import React from "react";
import GetInTouch from "../../components/Home/GetInTouch";
import ResultSection from "../../components/Home/ResultSection";
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
function Home() {
  const {t}=useTranslation();
  return (
    
    <div className="xl:mx-16 lg:mx-12">
      
      <h2 className="xl:text-[96px] md:text-[70px] text-[40px] AllertaStencil_font text-center mb-8">INFO-VAP</h2>
      <h2 className="xl:text-[36px] md:text-[70px] text-[40px] AllertaStencil_font text-center mb-8">
        <TypeAnimation
      sequence={[
        'Get the most reliable information on voting', // Types 'One'
        5000, // Waits 1s
        '', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        ' ', // Types 'Three' without deleting 'Two'
       
      ]}
     
      cursor={true}
      repeat={Infinity}
      
    />
      </h2>
      <div className="Actor_font flex flex-col gap-8 md:text-2xl text-xl text-justify">
        <p>
          {t("Home:firstParagraph")}
        </p>
        <p>

        {t("Home:secondParagraph")}
        </p>
        {/* <p>
          A stone hand-picked from the river Thames and brought to Flat 8. Fresh
          handmade pizzas can be made on this stone provided the oven
          temperature can be regulated. Note: stones do not catch fire (unlike
          cardboard takeout boxes housing fish and chips and/or electric kettles
          turned on by placing them on stoves).
        </p> */}
      </div>
      <ResultSection/>
      <GetInTouch/>
    </div>
  );
}

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","Home","footer","header"])),
      // Will be passed to the page component as props
    },
  };
}