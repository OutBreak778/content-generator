import SearchInput from '@/components/SearchInput';
import { Outfit } from 'next/font/google'
import React from 'react'

const inter = Outfit({ subsets: ["latin"] });

const SearchSection = () => {
  return (
    <div className='p-8 bg-gradient-to-br from-gray-100/90 to-slate-200/60 rounded-md flex-col items-center justify-center mx-3 text-2xl text-slate-700'>
      <h2 className={`${inter} font-semibold text-3xl`}>Browse the Template's from here...</h2>
      <p className={`${inter} font-normal text-lg`}>what are you creating today ?</p>
    </div>
  )
}

export default SearchSection
