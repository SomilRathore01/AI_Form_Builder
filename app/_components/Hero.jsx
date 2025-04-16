'use client'
import { Button } from '@/components/ui/button'
import { SignInButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  const { user, isSignedIn } = useUser();
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            Create Your Form

            <span className="sm:block"> With Help of AI </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Create your shareable form by just giving a prompt and all the required fields will be created by AI.
            Then you just have to select desired theme and background color for your form and share it to whom it may concern.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                  Create Form
                </Button>
              </Link>
            ) : (
              <SignInButton>
                <Button className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                  Create Form
                </Button>
              </SignInButton>
            )}

            <a
              className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
