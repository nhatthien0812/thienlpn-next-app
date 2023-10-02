'use client'
import Image from 'next/image'
import IconArcade from '../_images/icon-arcade.svg'
import IconAdvanced from '../_images/icon-advanced.svg'
import IconPro from '../_images/icon-pro.svg'
import { IPlan } from '@/app/model/plan'
import { useState } from 'react'
import clsx from 'clsx'

const initPlans: IPlan[] = [
  {
    name: 'Arcade',
    price: 9,
    icon: IconArcade,
    isSelect: false,
  },
  {
    name: 'Advanced',
    price: 12,
    icon: IconAdvanced,
    isSelect: false,
  },
  {
    name: 'Pro',
    price: 15,
    icon: IconPro,
    isSelect: false,
  },
]

export default function SelectPlan() {
  const [plans, setPlans] = useState<IPlan[]>(initPlans)

  const onSelectPlan = (name: string) => {
    setPlans(plans.map((item) => ({ ...item, isSelect: name === item.name })))
  }

  return (
    <div className="py-10 space-y-4 min-w-[460px]">
      <h1 className="text-black font-bold text-3xl">Select your plan</h1>
      <p className="text-slate-400 !mb-10">
        You have the option of monthly or yearly billing.
      </p>

      <div className="grid grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={clsx(
              'p-4 border rounded-xl',
              plan.isSelect
                ? 'border-purplish-blue bg-alabaster'
                : 'border-slate-300'
            )}
            onClick={() => {
              onSelectPlan(plan.name)
            }}
          >
            <Image
              src={plan.icon}
              alt=""
              width={40}
              height={40}
              className="mb-10"
            />
            <h1 className="text-black">{plan.name}</h1>
            <p className="text-slate-400 text-sm">${plan.price}/mo</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-cool-gray flex items-center justify-center w-full p-8">
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" id="toggle" className="sr-only peer" />
          <div className="block relative bg-marine-blue w-16 h-9 p-1 rounded-full before:absolute before:bg-alabaster before:w-7 before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-white"></div>
        </label>
      </div>
    </div>
  )
}
