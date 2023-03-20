import star from '../images/star.png'

const Info = () => {
  return (
    <div className=' px-28 py-12'>
     <div className='flex justify-between mb-16'>
        <img className='w-8' src={star} alt='star icon' />
        <p className='text-[#D0D6F9] text-[1.5rem] font-BarlowCondensed'>DESIGN SYSTEM</p>
     </div>

    <div className='flex flex-col mb-32'>
        <p className='text-[#FFFFFF] mb-11 text-[1.6rem] text-opacity-20'>01 
        <span className='text-white font-BarlowCondensed tracking-[4px]'> COLORS</span></p>
        <div className='flex gap-9'>
            <div>
                <div className='w-[21.875em] h-[7.25em] mb-5 border pt-16 pl-6 border-[grey]'>
                    <p className='text-white text-[1.5rem] font-belle font-[300]'>#0B0D17</p></div>
                <p className='text-white text-[1.2rem] tracking-wider text-opacity-80 font-[300]'>RGB 
                    <span className='ml-14 text-white text-[1.2rem]'>11, 13, 23</span></p>    
                <p className='text-white text-[1.2rem] tracking-wider text-opacity-80 font-[300]'>HSL 
                    <span className='ml-14 text-white text-[1.2rem]'>230°, 35%, 7%</span></p>
            </div>
            <div>
                <div className='w-[21.875em] bg-[#D0D6F9] h-[7.25em] mb-5 border pt-16 pl-6 border-[grey]'>
                    <p className='text-black text-[1.5rem] font-belle font-[300]'>#D0D6F9</p></div>
                <p className='text-white text-[1.2rem] tracking-wider text-opacity-80 font-[300]'>RGB 
                    <span className='ml-14 text-white text-[1.2rem]'>208, 214, 249</span></p>    
                <p className='text-white text-[1.2rem] tracking-wider text-opacity-80 font-[300]'>HSL 
                    <span className='ml-14 text-white text-[1.2rem]'>231°, 77%, 90%</span></p>
            </div>
            <div>
                <div className='w-[21.875em] bg-[#FFFFFF] h-[7.25em] mb-5 border pt-16 pl-6 border-[grey]'>
                    <p className='text-black text-[1.5rem] font-belle font-[300]'>#FFFFFF</p></div>
                <p className='text-white text-[1.2rem] tracking-wider text-opacity-80 font-[300]'>RGB 
                    <span className='ml-14 text-white text-[1.2rem]'>255, 255, 255</span></p>    
                <p className='text-white text-[1.2rem] tracking-wider text-opacity-80 font-[300]'>HSL 
                    <span className='ml-14 text-white text-[1.2rem]'>0°, 0%, 100%</span></p>
            </div>
 
        </div>
    </div>

    <div className='flex flex-col'>
        <p className='text-[#FFFFFF] mb-11 text-[1.6rem] text-opacity-20'>02 
        <span className='text-white font-BarlowCondensed tracking-[4px]'> TYPOGRAPHY</span></p>
        <div className='flex'>
        <div className='flex flex-col mr-24'>
            <p className='text-[#D0D6F9] text-[1.2rem] font-[300] tracking-wider'>Heading 1 - Bellefair Regular - 150px</p>
            <h1 className='text-white font-belle text-[150px]'>EARTH</h1>
            <p className='text-[#D0D6F9] text-[1.2rem] font-[300] tracking-wider'>Heading 2 - Bellefair Regular - 100px</p>
            <h2 className='text-white font-belle text-[100px]'>VENUS</h2>
            <p className='text-[#D0D6F9] text-[1.2rem] font-[300] tracking-wider'>Heading 3 - Bellefair Regular - 56px</p>
            <h3 className='text-white mb-8 font-belle text-[56px]'>JUPITER & SATURN</h3>
            <p className='text-[#D0D6F9] text-[1.2rem] font-[300] tracking-wider'>Heading 4 - Bellefair Regular - 32px</p>
            <h4 className='text-white mb-8 font-belle text-[32px]'>URANUS, NEPTUNE, & PLUTO</h4>
            <p className='text-[#D0D6F9]  text-[1.2rem] font-[300] tracking-wider'>Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
            <h5 className='text-[#D0D6F9] font-[300] font-BarlowCondensed tracking-[4.7px] text-[28px]'>SO, YOU WANT TO TRAVEL TO SPACE</h5>
        </div>
        <div className='flex flex-col'>
            <p className='text-[#D0D6F9] mb-2 text-[1.2rem] font-[300] tracking-wider'>Subheading 1 - Bellefair Regular - 28px</p>
            <p className='text-[white] font-[300] font-belle mb-11 text-[28px]'>384,400 KM</p>
            <p className='text-[#D0D6F9] mb-2 text-[1.2rem] font-[300] tracking-wider'>Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
            <p className='text-[white] font-[300] font-BarlowCondensed mb-11 tracking-[2.35px] text-[14px]'>AVG. DISTANCE</p>
            <p className='text-[#D0D6F9] mb-2 text-[1.2rem] font-[300] tracking-wider'>Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
            <p className='text-[white] font-[300] font-BarlowCondensed mb-11 tracking-[2.7px] text-[16px]'>EUROPA</p>
            <p className='text-[#D0D6F9] text-opacity-50 text-[1.2rem]'>Body Text</p>
            <p className='text-[#FFFFFF] font-[300] tracking-wider max-w-[500px] text-[1.2rem]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
        </div>
        </div>
    </div>

    </div>
  )
}

export default Info