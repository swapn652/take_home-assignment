import { Button } from "~src/components/Button"
import "./style.css"
import { Greeting } from "~src/components/Greeting"

function IndexPopup() {
  return ( 
    <div className="h-[500px] w-[500px] bg-blue-900 flex flex-col items-center justify-center mx-auto gap-y-10">
      <Greeting/>
      <Button/>
    </div>
  )
}

export default IndexPopup
