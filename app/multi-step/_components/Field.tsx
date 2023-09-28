'use client'
import { useState } from 'react'

type FieldProps = {
  label: string
  value: string
}

export default function Field(props: FieldProps) {
  const [value, setValue] = useState(props.value)
  return (
    <div className="flex flex-col space-y-1 text-black">
      <label className="text-sm">{props.label}</label>
      <input
        required
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        className="border border-slate-300 rounded-xl p-3 font-semibold"
      />
    </div>
  )
}
