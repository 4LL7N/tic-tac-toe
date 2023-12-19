import { Link } from "react-router-dom"
import { Tiktaktoe } from "../App"
import { useContext } from "react"

interface Context{
  playWith:boolean,
  setPlayWith:any
}

function Menu(){
    const context = useContext<Context>(Tiktaktoe)

    return(
        <>
            <div className="flex  justify-center min-h-[100vh] bg-[#1A2A33] pt-[119px] md:pt-[277px] lg:pt-[215px]" >
                <section className="flex flex-col items-center w-[460px] " >
                    <img className="mb-[32px]" src="/images/logo.svg "/>
                    <div className="w-[327px] p-[24px] flex flex-col rounded-[15px] items-center bg-[#1F3641] shadow-[0px_8px_0px_0px_#10212A] mb-[40px] md:w-[460px] " >
                        <h1 className="text-[16px] text-[#A8BFC9] tarcking-[1px] font-bold mb-[24px]" >PICK PLAYER 1’S MARK</h1>
                        <div className="flex p-[9px] w-[100%] mb-[17px] bg-[#1A2A33] rounded-[10px]" >
                            <div className={`flex items-center justify-center w-[100%] h-[54px] rounded-[10px] ${context.playWith?null :"bg-[#A8BFC9]"} `} onClick={() => context.setPlayWith(true) } ><img src={context.playWith?"/images/cross-chosen.svg":"/images/cross.svg"}/></div>
                            <div className={`flex items-center justify-center w-[100%] h-[54px] rounded-[10px] ${!context.playWith?null :"bg-[#A8BFC9]"} `} onClick={() => context.setPlayWith(false) } ><img src={!context.playWith? "/images/oval-chosen.svg" :"/images/oval.svg"} /></div>
                        </div>
                        <p className="text-[14px] text-[#A8BFC9] font-medium tracking-[0.875px]" >REMEMBER : X GOES FIRST</p>
                    </div>
                    <Link to="/sologame" className="w-[327px] md:w-[460px] flex items-center justify-center rounded-[15px] bg-[#F2B137] shadow-[0px_8px_0px_0px_#CC8B13] py-[14px] md:py-[17px] mb-[24px]" ><p className="text-[16px] md:text-[20px] text-[#1A2A33] font-bold md:tracking-[1.25px] " >NEW GAME (VS CPU)</p></Link>
                    <Link to="/multiplayer" className="w-[327px] md:w-[460px] flex items-center justify-center rounded-[15px] bg-[#31C3BD] shadow-[0px_8px_0px_0px_#118C87] py-[14px] md:py-[17px] " ><p className="text-[16px1] md:text-[20px] text-[#1A2A33] font-bold md:tracking-[1.25px] " >NEW GAME (VS PLAYER)</p></Link>
                </section>
            </div>
        </>
    )
}

export default Menu