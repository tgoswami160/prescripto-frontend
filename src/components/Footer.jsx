import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Our platform is dedicated to making healthcare accessible, reliable, and stress-free for everyone. We seamlessly connect you with experienced and verified doctors, ensuring that you receive trusted medical guidance, personalized care, and timely support—all from the comfort of your home.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-blue-500'><Link to="/">Home</Link></li>
            <li className='hover:text-blue-500'><Link to="/about">About us</Link></li>
            <li className='hover:text-blue-500'>Delivery</li>
            <li className='hover:text-blue-500'>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-blue-500'><a href="tel:+917217888531">+917217888531</a></li>
            <li className='hover:text-blue-500'><a href="mailto:goswamit241@gmail.com">goswamit241@gmail.com</a></li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ tanuGoswami - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
