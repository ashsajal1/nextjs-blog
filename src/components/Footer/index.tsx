import React from 'react'
import { FaceIcon, FigmaLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

export default function Footer() {
    return (
        <footer className='flex item-center justify-center p-4 bg-primary'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-xl font-extrabold'>Blog</h2>
                <p className='text-sm'>This is the about</p>
                <div className='flex justify-between items-center mt-5 gap-2'>
                    <a href='#' title='Social media url'><LinkedInLogoIcon className='h-[1.2rem] w-[1.2rem]' /></a>
                    <a href='#' title='Social media url'><InstagramLogoIcon className='h-[1.2rem] w-[1.2rem]' /></a>
                    <a href='#' title='Social media url'><TwitterLogoIcon className='h-[1.2rem] w-[1.2rem]' /></a>
                    <a href='#' title='Social media url'><FigmaLogoIcon className='h-[1.2rem] w-[1.2rem]' /></a>
                </div>
            </div>
        </footer>
    )
}
