import React from 'react'

const HeroSection = () => {
  return (
 <section className='flex flex-col md:flex-row items-center justify-between p-14 px-16 bg-gray-100' style={{backgroundImage: 'url(/hero.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <div className='md:w-[34%] mb-8 md:mb-0'>
        <h1 className='text-6xl font-bold text-black'>Your Voice. <b className='text-blue-900 font-bold block'>We are Listening.</b></h1>
        <p className='text-gray-700 mt-4'>
            Report your grievances and track their progress with ease. Our platform ensures transparency and accountability in addressing citizen concerns.
        </p>
        <div className='mt-6 space-x-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md text-'>
                Submit Grievance
            </button>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                Track Grievance
            </button>
        </div>
    </div>
    <div>
        <form action="">
            <h4>
                Track Your Complain
            </h4>
            <p>Enter your grievance ID to track its status.</p>
            <div>
                <input type="text" placeholder='Enter your Grievance ID' />
                <button>Track</button>
            </div>
            <span>
                Your data is safe and secure we us.
            </span>

        </form>
    </div>

 </section>
  )
}

export default HeroSection
