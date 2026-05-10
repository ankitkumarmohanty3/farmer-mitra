import React from 'react'

const SearchBox = ({label, placeholder,value,handleSearchChange}) => {

 


  return (
    <div className='flex items-center gap-3 pl-4 flex-1 font-primary'>
       <label className='text-lg font-semibold text-primary dark:text-light'>{label}</label>
       <input type="text" className='px-4 py-2 text-base border rounded-md transition border-primary focus-ring focus:ring-dark focus:outline-none dark:border-light dark:focus:ring-lighter dark:text-lighter text-gray-800' placeholder={placeholder} value={value} onChange={(event)=>handleSearchChange(event.target.value,event)}/>
    </div>
  )
}

export default SearchBox
