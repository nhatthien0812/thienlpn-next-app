import Step from '@/app/multi-step/_components/Step'
import PersonalInfo from './_components/PersonalInfo'

export default function MultiStep() {
  return (
    <main>
      <section className="min-h-screen flex justify-center items-center">
        <div className="bg-white p-4 rounded-xl w-fit flex relative gap-4">
          <Step />
          <PersonalInfo />
          <div>
            <button className="bg-blue-900 absolute bottom-4 right-32 px-8 py-3 rounded-xl hover:brightness-125">
              Next Step
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
