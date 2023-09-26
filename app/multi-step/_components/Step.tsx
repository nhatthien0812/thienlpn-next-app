import Image from 'next/image'
import BgSidebarDesktop from '../_images/bg-sidebar-desktop.svg'
export default function Step() {
  const steps = [
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
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 bg-white">
          <Image src={BgSidebarDesktop} className="w-full h-full" alt="" fill />
        </div>
      </div>
    </>
  )
}
