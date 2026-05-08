import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import {motion} from 'framer-motion'


const OurWork = () => {
   const workData = [
    {
      title:'Secure Digital Payments & Settlements',
      decription:'We enable fast, secure digital payments that ensure transparent and reliable settlements between farmers and buyers.',
      images:assets.payment_farmer
    },
     {
      title:'Bulk Order & B2B Sales Management',
      decription:'We enable efficient bulk selling and B2B transactions, helping farmers and buyers manage large orders with ease.',
      images:assets.bulk_farmer
    },
     {
      title:'Direct Marketplace Access',
      decription:'We connect farmers directly with buyers, enabling transparent trading without intermediaries.',
      images:assets.direct_farmer
    }
   ]
  return (
    <motion.div 
       initial="hidden"
       
        whileInView = "visible"
        viewport = {{once:true}}
        transition={{staggerChildren:0.2}}
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700
                                 dark:text-white dark:bg-black 
                            '>
     <Title title='Our latest work' desc='We simplify the journey from farm produce to consumer markets through technology. '/>

     <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
          workData.map((work, index)=>(
            <motion.div 
               initial={{opacity:0, y:30}}
               whileInView ={{opacity:1,y:0}}
               viewport = {{once:true}}
               transition={{duration:0.5, delay:index * 0.2}}
              
            key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
              <img src={work.images} alt=""  className='w-full rounded-xl'/>
              <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
              <p className='text-sm opacity-60 w-5/6'>{work.decription}</p>
            </motion.div>
          ))
        }
     </div>
    </motion.div>
  )
}

export default OurWork
