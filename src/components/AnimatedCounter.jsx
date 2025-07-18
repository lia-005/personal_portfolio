
import { counterItems } from "../constants";
import CountUP from "react-countup";

const AnimatedCounter = () =>{
    return(
       <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
<div className="max-auto grid-4-cols">
    {counterItems.map((item) => (
  <div key={item.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col">    
    <div className="counter-number text-white text-5xl font-bold mb-2">
        <CountUP
  start={0}
  end={item.value}
  suffix={item.suffix}
  duration={2}
  enableScrollSpy
>
  {({ countUpRef }) => (
    <span ref={countUpRef} />
  )}
</CountUP>
    </div>
    <div className="text-white-50 text-lg">{item.label}</div>
  </div>
))}
</div>

       </div>
    )
}

export default AnimatedCounter;