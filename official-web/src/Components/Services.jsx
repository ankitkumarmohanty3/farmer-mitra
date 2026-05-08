import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion} from 'framer-motion'

const Services = () => {
  const servicesData  = [
            {
                title:'Direct Farmer-to-Consumer Marketplace',
                description:'A transparent digital marketplace where farmers sell vegetables directly to consumers — eliminating middlemen and ensuring fair prices for farmers and fresh produce for buyers.',
                icon:assets.ads_icon
            },
            {
                title:'Bulk Buying for Retailers & Businesses',
                description:'A dedicated service for shop owners, restaurants, hotels, and wholesalers to purchase vegetables in bulk quantities directly from farmers at competitive rates.',
                icon:assets.marketing_icon
            },
            {
                title:'Fair Pricing & Transparent Transactions',
                description:'We provide clear pricing, no hidden commissions, and complete transaction transparency so both farmers and buyers know exactly what they’re paying and earning..',
                icon:assets.content_icon
            },
            {
                title:'Digital Empowerment for Farmers',
                description:'We help farmers list their produce, manage orders, track sales, and receive payments digitally, enabling them to participate confidently in the modern digital economy.',
                icon:assets.dg_removed
            }
    
    
    
           ]
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{once:true}}
      transition={{staggerChildren:0.2}}
      id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30    text-gray-700 dark:text-white dark:bg-black'>
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

        <div className='flex flex-col md:grid grid-cols-2'>
           {servicesData.map((Services,index)=>(
            <ServiceCard key={index} services={Services}  index={index}/>
           ))} 
        </div>
        
    </motion.div>
  )
}

export default Services
