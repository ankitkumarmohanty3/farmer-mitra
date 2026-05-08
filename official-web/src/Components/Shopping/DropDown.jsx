import React from 'react'

const DropDown = ({label,options,selectedValue,handleSort}) => {
  return (
    <div className='flex items-center gap-2 justify-end pr-12 flex-1 font-primary'>
      <label className='text-lg font-semibold text-primary dark:text-light '>{label}</label>
      <select className='px-3 py-2 text-base border rounded-md transition dark:bg-gray-800 border-primary focus:ring focus:ring-dark focus:outline-none text-gray-800  dark:border-light dark:text-lighter dark:focus:ring-lighter' value={selectedValue} onChange={(event)=>handleSort(event.target.value)}>
        {options.map((optionVal,index)=>(
              <option key={index} value={optionVal}>{optionVal}</option>
       ) )}
      </select>
    </div>
  )
}

export default DropDown
