import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="max-w-7xl mx-auto min-h-screen relative">
        <h1>Front-end Mentor</h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/order-summary-component-main">
            <button className="p-4 mx-auto bg-green-400 text-lg rounded-lg hover:brightness-75">
              Order Summary
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
