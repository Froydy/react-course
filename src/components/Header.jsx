import { useState } from "react"
import logo from "/logo-name.svg"

export default function Header(){
    const [now, setNow] = useState(new Date())
    
  
    
    return (
      <header>
        <img src={logo} alt="result" />
          {/*<h3>Result University</h3>*/}

          <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    )
  }