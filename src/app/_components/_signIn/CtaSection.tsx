import React from 'react'
import { signIn } from '../../../../auth'
import { FcGoogle } from 'react-icons/fc'

const CtaSection = () => {
  return (
    <section className="pt-20 pb-52 md:py-40">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-white">さあ、</span>
          <span className="text-pink-400">始めましょう</span>
        </h2>
        <h3 className="text-xl text-gray-300 mt-8 mb-12 text-center md:text-3xl">
          <div className="inline-block">無駄づかいを我慢して</div>
          <div className="inline-block">欲しい物を手に入れよう！</div>
        </h3>
        <form
          action={async () => {
            'use server'
            await signIn('google')
          }}
          className="flex justify-center rounded-full bg-white/10 px-6 py-3 text-base font-semibold no-underline transition hover:bg-white/20 sm:w-[70%] sm:text-lg md:w-[40%] md:text-xl lg:w-[25%]">
          <button className="flex flex-nowrap justify-center items-center max-w-md gap-3 ">
            <FcGoogle className="size-6 sm:size-7 md:size-8 " />
            <p>Sign in with Google！</p>
          </button>
        </form>
      </div>
    </section>
  )
}

export default CtaSection
