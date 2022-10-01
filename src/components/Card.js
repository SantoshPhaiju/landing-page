import React from 'react'

const Card = () => {
  return (
    <div className='container h-[400px] w-[1000px] mx-auto rounded-3xl bg-white shadow-lg text-black mb-20 relative bottom-32 '>
      <div className="inner flex items-center justify-center space-x-12">
        <div className='left w-[600px]'>
          <p>Vivamus sit amet</p>
          <h3>The Lorem Ipsum Dolor Sit</h3>
        </div>
        <div className='right w-[300px]'>
          <div className="image">
          <img src="https://res.cloudinary.com/imajin/image/upload/v1592043744/movie/movie3_a5wvov.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
