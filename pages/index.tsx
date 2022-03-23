import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Animator, batch, Fade, MoveOut, ScrollContainer, ScrollPage, Sticky } from 'react-scroll-motion'
import NavBar from '../Components/Navbar'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (<ScrollContainer>
          <div className = 'bg-secondary-default'>
          <ScrollPage page = {0}>
            <Animator animation = {batch(Sticky(),Fade(),MoveOut(0,-200))}>
                <p className='startingText scale-150'>Curiousity</p>
            </Animator>
          </ScrollPage>
          <ScrollPage page = {1}>
            <Animator animation = {batch(Sticky(),Fade(),MoveOut(0,-200))}>
                <p className='startingText scale-150'>Strategy</p>
            </Animator>
          </ScrollPage>
          <ScrollPage page = {2}>
            <Animator animation = {batch(Sticky(),Fade(),MoveOut(0,-200))}>
                <p className='startingText scale-150'>Creativity</p>
            </Animator>
          </ScrollPage>
          <ScrollPage page = {3}>
            <Animator animation = {batch(Sticky(),Fade(),MoveOut(0,-200))}>
                <p className='startingText scale-150'>Excellence</p>
            </Animator>
          </ScrollPage>
          <ScrollPage page = {3}>
            <Animator animation = {batch(Sticky(),Fade(),MoveOut(0,-200))}>
                <p className='startingText scale-150'>Excellence</p>
            </Animator>
          </ScrollPage>
          <ScrollPage page = {4}>
            <Animator animation = {batch(Sticky(),Fade(),MoveOut(0,-100))}>
                <p className='startingText scale-150'>This is what guides me.</p>
            </Animator>
          </ScrollPage>
              <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="flex flex-col items-center justify-center py-2">
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-600 shadow-lg transform -rotate-45 rotate-6 rounded-3xl"></div>
                          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <h1 className="text-6xl font-bold">
                              Stylish Glassmorphic Header Animation Made with Tailwind CSS &
                              Next.js
                            </h1>
                            <h2 className="text-3xl font-bold">
                              Fork and modify this sandbox
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="flex flex-col items-center justify-center py-2">
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-600 shadow-lg transform -rotate-45 rotate-6 rounded-3xl"></div>
                          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <h1 className="text-6xl font-bold">
                              Stylish Glassmorphic Header Animation Made with Tailwind CSS &
                              Next.js
                            </h1>
                            <h2 className="text-3xl font-bold">
                              Fork and modify this sandbox
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div></div>
    </ScrollContainer>
  )
}


