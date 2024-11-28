
'use client'

import { BeatLoader } from "react-spinners"

function Spinner() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
        <BeatLoader size={20} />
    </div>
  )
}

export default Spinner