'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import BgSidebarDesktop from '../_images/bg-sidebar-desktop.svg'

type Step = {
  id: string
  title: string
  description: string
  isComplete: boolean
}

export default function Step() {
  const initSteps: Step[] = [
    {
      id: 'step-1',
      title: 'Step 1',
      description: 'YOUR INFO',
      isComplete: true,
    },
    {
      id: 'step-2',
      title: 'Step 2',
      description: 'SELECT PLAN',
      isComplete: false,
    },
    {
      id: 'step-3',
      title: 'Step 3',
      description: 'ADD-ONS',
      isComplete: false,
    },
    {
      id: 'step-4',
      title: 'Step 4',
      description: 'SUMMARY',
      isComplete: false,
    },
  ]

  const [steps, setSteps] = useState<Step[]>(initSteps)

  const onStepClick = (id: string) => {
    setSteps(steps.map((item) => ({ ...item, isComplete: id === item.id })))
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
