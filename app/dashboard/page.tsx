"use client"

import React, { useState } from 'react'
import SearchInput from '@/components/SearchInput';
import TemplateSection from './_components/TemplateSection';
import SearchSection from './_components/SearchSection';

const page=()=> {

  const [userSearchInput, setUserSearchInput] = useState<string>()

  return (
    <div className='bg-white'>
      <div className='w-full mt-3 px-6 block md:hidden'>
        <SearchInput onClickChange={(value:string) => setUserSearchInput(value)}  />
      </div>
      <div className='bg-white pt-4'>
        {/* <div className='block md:hidden'> */}
        <SearchSection/>
        <TemplateSection userSearchInput={userSearchInput} />
        {/* </div> */}
      </div>
    </div>
  )
}

export default page
