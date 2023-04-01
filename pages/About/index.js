import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Function component for the About page
function About() {
  // Destructuring the t function from useTranslation hook
  const { t } = useTranslation();

  return (
    <div className="mt-16">
      <h2 className="text-center AllertaStencil_font md:text-[28px] text-[24px]">
       {t("About:Heading")}
      </h2>
      <div className="md:flex xl:gap-24 lg:gap-8 gap-4 justify-center md:m-4">
        <div className=" bg-[#F7FAFD] lg:p-6 p-4 py-10 xl:w-[365px] lg:w-[300px]">
          <img
            width={220}
            className="flex mx-auto"
            src="/images/About_img1.svg"
          />
          <p
            className="lg:text-[20px] text-[18px] my-3 text-center py-2 
AllertaStencil_font"
          >
           {t("About:cardHeading1")}
          </p>
          <p className="Actor_font lg:text-[24px] text-[20px] text-[#838383]">
           {t("About:cardText2")}
          </p>
        </div>
        <div className=" bg-[#F7FAFD] p-6 py-10 xl:w-[365px] lg:w-[300px] ">
          <img
            width={250}
            className="flex mx-auto"
            src="/images/About_img2.svg"
          />
          <p
            className="lg:text-[20px] my-4 text-[18px] text-center 
AllertaStencil_font"
          >
           {t("About:cardHeading")}
          </p>
          <p className="Actor_font lg:text-[24px] text-[20px] text-[#838383]">
           {t("About:cardText")}
          </p>
        </div>
      </div>
    </div>
  );
}

// Exporting the component
export default About;

// this function exports the translations to be used on server side.
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common","Header","About","footer","navbar"])),
      // this will be passed to the page component as props
    },
  };
}
