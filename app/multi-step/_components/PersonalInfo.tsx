import Field from './Field'

export default function PersonalInfo() {
  return (
    <div className="py-10 space-y-4">
      <h1 className="text-black font-bold text-3xl">Personal Info</h1>
      <p className="text-slate-400 !mb-10">
        Please provide your name, email address and phone number.
      </p>

      <div className="space-y-6">
        <Field value="" label="Name" />
        <Field value="" label="Email Address" />
        <Field value="" label="Phone Number" />
      </div>
    </div>
  )
}
