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

function Winner(){

    const context = useContext<Context>(Tiktaktoe)
    const navigate = useNavigate()

    let newGamebox = ["","","","","","","","",""]
    let random = Math.floor(Math.random() *9)

    newGamebox[random] = "/images/icon-x.svg"

    return(
        <>
             <div className={` w-[100vw] h-[228px] md:h-[266px] bg-[#1F3641] flex flex-col items-center justify-center absolute top-[220px] md:top-[379px] lg:top-[330px] ${context.winner?" duration-700  left-[0]":"duration-700 left-[-375px] md:left-[-768px] lg:left-[-1550px]"} `}  >
                {context.winner == "tie"?
                    <>
                        <h2 className="text-[24px] md-[40px] text-[#A8BFC9] font-bold trackinig-[1.5px] md:trackinig-[2.5px] mb-[24px]" >ROUND TIED</h2>
                    </>
                :
                <>
                    <h1 className="text-[14px] md:text-[16px] text-[#A8BFC9] font-bold tracking-[0.875px] md:tracking-[1px] mb-[16px] " >{context.pageParams == "multiplayer"?context.winner == "/images/icon-x.svg"?"PLAYER 2 WINS!":"PLAYER 1 WINS!":context.winner == "/images/icon-x.svg"?"YOU WON!":"OH NO, YOU LOST…" }</h1>
                    <div className="flex items-center gap-[9px] md:gap-[24px] mb-[24px]" >
                        <img className="w-[28px] md:w-[64px] h-[28px] md:h-[64px] " src={`${context.winner} `}/>
                        <h2 className={`text-[24px] md:text-[40px] ${context.winner == "/images/icon-x.svg"?"text-[#31C3BD]":"text-[#F2B137]" } font-bold trackinig-[1.5px] trackinig-[2.5px]`} >TAKES THE ROUND</h2>
                    </div>
                </>
                }
                <div className="flex gap-[16px]" >
                    <div className="w-[76px] h-[52px] flex items-center justify-center rounded-[10px] bg-[#A8BFC9] shadow-[0px_4px_0px_0px_#6B8997]" onClick={() => {navigate("/") ;window.location.reload()}} ><p className=" text-[16px] text-[#1A2A33] text-center font-bold " >QUIT</p></div>
                    <div className="w-[146px] h-[52px] flex items-center justify-center rounded-[10px] bg-[#F2B137] shadow-[0px_4px_0px_0px_#CC8B13] " onClick={() => {context.pageParams == "sologame"?!context.playWith?context.setGamebox(newGamebox):context.setGamebox(["","","","","","","","",""]):context.setGamebox(["","","","","","","","",""]),context.setPlayWith(true);context.setWinner()}} ><p className=" text-[16px] text-[#1A2A33] text-center font-bold " >NEXT ROUND</p></div>
                </div>
            </div>
        </>
    )
}

export default Winner