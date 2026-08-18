import Header from './componet/Header'
import Footer from './componet/Footer'
const Homepage = () => {
  return (
    <div>
      <Header />
      <main className='min-h-screen p-4'>
        <section className='flex items-center justify-center h-screen bg-gray-100'>
          <div>
            <h1 className='text-4xl font-bold mb-4'>hi</h1>
            <p className='text-lg mb-8'>Stay updated with the latest government notices and announcements.</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Get Started</button>
          </div>
          <div className='mt-8'>
            <img src="https://media.gettyimages.com/id/461933502/photo/this-photograph-taken-on-january-19-shows-a-general-view-of-the-parliament-building-in.jpg?s=612x612&w=gi&k=20&c=PSIvqwnsP8SKy0gEaw3SyTMqeFzlAAFCVEIMgVCCQHg=" alt="Government Notice" className='mt-8 w-full max-w-md rounded-lg shadow-lg' />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


export default Homepage
