'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import BgSidebarDesktop from '../_images/bg-sidebar-desktop.svg'
import { IStep } from '@/app/model/step'

type StepProps = {
  initSteps: IStep[]
  setIndex: (index: number) => void
}
export default function Step({ initSteps, setIndex }: StepProps) {
  const [steps, setSteps] = useState<IStep[]>(initSteps)

  const onStepClick = (id: number) => {
    setSteps(steps.map((item) => ({ ...item, isComplete: id === item.id })))
    setIndex(id)
  }

  return (
    <div className="relative">
      <Image src={BgSidebarDesktop} alt="" width={274} height={568} />
      <div className="absolute top-0 left-0 w-full h-full p-10 space-y-8">
        {steps.map((item, index) => (
          <div key={item.id} className="flex items-center gap-4 text-sm">
            <div
              className={clsx(
                'rounded-full w-8 h-8 border border-[#c3def9] flex justify-center items-center',
                { 'bg-[#c3def9] text-black': item.isComplete }
              )}
              onClick={() => {
                onStepClick(item.id)
              }}
            >
              {index + 1}
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase">{item.title}</p>
              <p className="font-semibold">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
