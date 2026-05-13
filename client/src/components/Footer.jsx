import React from 'react'
import { assets } from '../assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className=' mt-20'>
      <div className='text-center'>
        {/* <img src={isDarkMode?assets.logo_dark:assets.logo} className='w-36 mx-auto mb-2' /> */}
          <h2 className='w-28 cursor-pointer font-bold text-4xl m-auto' >OmarFaruk</h2>

        <div className='w-max flex items-cenhttps://excalidraw.com/ter gap-2 mx-auto mt-2'>
             <img src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} className='w-6' />
             muhammadomarfaruk31@gmail.com
        </div>
      </div>

      <div className=' text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>&copy; 2026 Omar Faruk. All rights reserved.</p>
        <ul className=' flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/omarFarukGit">GitHub</a></li>
            <li><a target='_blank' href="https://www.facebook.com/profile.php?id=61585434603048">Facebook</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/omarfarukdev/">Linkedin</a></li>
        </ul>
      </div>
      {/* <div class="backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8">
</div> */}
    </div>
  )
}

export default Footer
