import Image from 'next/image'
import { Red_Hat_Display } from 'next/font/google'
import iconMusic from '/assets/images/order-summary-component-main/icon-music.svg'

const redHatDisplay = Red_Hat_Display({
  weight: ['500', '700', '900'],
  subsets: ['latin-ext'],
})
export default function OrderSummary() {
  return (
    <main className="bg-white" style={redHatDisplay.style}>
      <section className="py-16 px-6 bg-[url('/assets/images/order-summary-component-main/pattern-background-mobile.svg')] min-[375px]:bg-[url('/assets/images/order-summary-component-main/pattern-background-desktop.svg')] w-full lg:bg-cover bg-no-repeat min-h-screen">
        <div className="mx-auto border tracking-wider bg-white rounded-xl overflow-hidden max-w-[406px]">
          <Image
            className="object-cover w-full"
            src={`${process.env.BASE_PATH}/assets/images/order-summary-component-main/illustration-hero.svg`}
            alt=""
            width={375}
            height={250}
          />
          <div className="space-y-6 p-8">
            <h3 className="text-center text-2xl font-bold text-[#373737]">
              Order Summary
            </h3>
            <p className="text-center mx-auto text-[#737373] sm:max-w-[90%]">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>

            <div className="rounded-xl bg-slate-100 px-4 py-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Image
                  src={`${process.env.BASE_PATH}/assets/images/order-summary-component-main/icon-music.svg`}
                  alt=""
                  width={48}
                  height={48}
                />
                <div>
                  <p className="text-[#373737] font-bold">Annual Plan</p>
                  <p className="text-[#737373]">$59.99/year</p>
                </div>
              </div>
              <div className="text-[#362AD8] text-sm font-bold underline">
                Change
              </div>
            </div>

            <button className="w-full bg-[#362AD8] drop-shadow-xl shadow-[#dbd5f4] shadow-xl text-white font-bold py-4 rounded-xl">
              Proceed to Payment
            </button>
            <button className="text-slate-500 w-full font-bold">
              Cancel Order
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
