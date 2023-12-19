import { useContext } from "react"
import { Tiktaktoe } from "../App"
import { useNavigate } from "react-router-dom"


interface Context{
    playWith:boolean,
    setPlayWith:any,
    Gamebox:string[],
    setGamebox:any,
    Restart:boolean,
    setRestart:any,
    winner:string|null,
    setWinner:any,
    pageParams:string|null,
    setPageParams:any
  }

function Restart(){

    const context = useContext<Context>(Tiktaktoe)
    const navigate = useNavigate()


    return(
        <>
            <div className={` w-[100vw] h-[228px] md:h-[266px] bg-[#1F3641] flex flex-col items-center justify-center gap-[24px] absolute top-[220px] md:top-[379px] lg:top-[330px] ${context.Restart?"block duration-700  left-[0]":" duration-700 left-[-375px] md:left-[-768px] lg:left-[-1550px]"} `}  >
                <h2 className="text-[24px] md:text-[40px] text-[#A8BFC9] font-bold trackinig-[1.5px] md:trackinig-[2.5px] " >RESTART GAME?</h2>
                <div className="flex gap-[16px]" >
                    <div className="w-[139px] h-[52px] flex items-center justify-center rounded-[10px] bg-[#A8BFC9] shadow-[0px_4px_0px_0px_#6B8997]" onClick={() => context.setRestart(false)} ><p className=" text-[16px] text-[#1A2A33] text-center font-bold " >NO, CANCEL</p></div>
                    <div className="w-[151px] h-[52px] flex items-center justify-center rounded-[10px] bg-[#F2B137] shadow-[0px_4px_0px_0px_#CC8B13] " onClick={() => {navigate("/") ;window.location.reload()}} ><p className=" text-[16px] text-[#1A2A33] text-center font-bold " >YES, RESTART</p></div>
                </div>
            </div>
        </>
    )
}

export default Restart