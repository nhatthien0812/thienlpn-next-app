'use client'
import { useEffect, useState } from 'react'
import { IStep } from '../model/step'
import PersonalInfo from './_components/PersonalInfo'
import Step from './_components/Step'
import clsx from 'clsx'
import SelectPlan from './_components/Plan'
import AddOns from './_components/AddOns'
import Summary from './_components/Summary'

const initSteps: IStep[] = [
  {
    id: 0,
    title: 'Step 1',
    description: 'YOUR INFO',
    isComplete: true,
    component: <PersonalInfo />,
  },
  {
    id: 1,
    title: 'Step 2',
    description: 'SELECT PLAN',
    isComplete: false,
    component: <SelectPlan />,
  },
  {
    id: 2,
    title: 'Step 3',
    description: 'ADD-ONS',
    isComplete: false,
    component: <AddOns />,
  },
  {
    id: 3,
    title: 'Step 4',
    description: 'SUMMARY',
    isComplete: false,
    component: <Summary />,
  },
]

export default function MultiStep() {
  const [index, setIndex] = useState(0)
  const [currStep, setCurrStep] = useState<IStep>(initSteps[index])

  const onNextStep = () => {
    if (index < initSteps.length - 1) {
      setIndex(index + 1)
    }
  }

  const onPrevStep = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  useEffect(() => {
    setCurrStep(initSteps[index])
  }, [index])

  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        <div className="bg-white p-4 rounded-xl w-fit flex gap-14 relative">
          <Step initSteps={initSteps} setIndex={setIndex} />
          <div className="px-16">
            {currStep.component}
            <div className="flex justify-between">
              <button
                className={clsx(
                  'text-black px-8 py-3 rounded-xl hover:brightness-90',
                  { invisible: initSteps[0].id === currStep.id }
                )}
                onClick={onPrevStep}
                disabled={initSteps[0].id === currStep.id}
              >
                Go Back
              </button>

              <button
                onClick={onNextStep}
                className="bg-blue-900 px-8 py-3 rounded-xl hover:brightness-125 "
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
