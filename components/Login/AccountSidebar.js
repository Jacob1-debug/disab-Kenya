import { useTranslation } from 'next-i18next'
import React from 'react'

function AccountSidebar() {
  const {t}=useTranslation();
  return (
    <div className='flex flex-col md:gap-44 gap-8'>
          
         
          
          
          <div className="mx-8">
            <p className="AdventPro_font text-[32px] text-center">{t("login:sidebar-heading")}</p>
            <div className="py-1 my-4 rounded-full bg-[#D9D9D9] md:w-[316px] flex px-8 mx-auto">
              <div className="flex justify-between">
                <div className="flex my-auto">
                  <img src="/images/alert-triangle.svg" />
                </div>
                <h2 className="flex my-auto w-[80%] ">
                 {t("login:sidebar-text")}
                </h2>
              </div>
            </div>
          </div>
        
    </div>
  )
}

export default AccountSidebar