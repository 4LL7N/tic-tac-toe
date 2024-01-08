import { Tiktaktoe } from "../App";
import { useContext, useEffect, useRef, useState } from "react";
import Restart from "./Restart";
import { useParams } from "react-router-dom";
import Winner from "./Winner";

interface Context {
  playWith: boolean;
  setPlayWith: any;
  Gamebox: string[];
  setGamebox: any;
  Restart: boolean;
  setRestart: any;
  winner: string | null;
  setWinner: any;
  pageParams: string | null;
  setPageParams: any;
}

function Game() {
  const params = useParams();
  const move = useRef(0);
  const P1 = useRef(0);
  const tie = useRef(0);
  const P2 = useRef(0);

  const count = useRef(0);

  const [PCmove, setPCmove] = useState(true);

  let change: string[] | undefined = [];
  const context = useContext<Context>(Tiktaktoe);

  context.setPageParams(params.game);

  function CPU() {
    let random = Math.floor(Math.random() * 9);
    let space = 0;

    for (let i = 0; i < context.Gamebox.length; i++) {
      if (context.Gamebox[i]) {
        space += 1;
      }
    }

    if (space <= 8) {
      change = [...context.Gamebox];
      while (change[random]) {
        random = Math.floor(Math.random() * 9);
      }

      change[random] = !context.playWith
        ? "/images/icon-x.svg"
        : "/images/icon-o.svg";
      context.setGamebox([...change]);
      space = 0;
    }
  }

  useEffect(() => {
    if (!context.playWith) {
      CPU();
    }
  }, []);

  useEffect(() => {
    count.current++;
    if (count.current > 1) {
      CPU();
    }
  }, [PCmove]);

  function win() {
    let a = 0;
    move.current += 1;
    for (let i = 0; i < 3; i++) {
      if (
        context.Gamebox[a + 2] &&
        context.Gamebox[a + 1] &&
        context.Gamebox[a] &&
        context.Gamebox[a] == context.Gamebox[a + 1] &&
        context.Gamebox[a + 1] == context.Gamebox[a + 2]
      ) {
        context.setWinner(context.Gamebox[a]);
        if (context.Gamebox[a] == "/images/icon-x.svg") {
          P1.current += 1;
        } else {
          P2.current += 1;
        }
        move.current = 0;
      }
      a += 3;
    }

    a = 0;

    for (let i = 0; i < 3; i++) {
      if (
        context.Gamebox[a + 6] &&
        context.Gamebox[a + 3] &&
        context.Gamebox[a] &&
        context.Gamebox[a] == context.Gamebox[a + 3] &&
        context.Gamebox[a + 3] == context.Gamebox[a + 6]
      ) {
        context.setWinner(context.Gamebox[a]);
        if (context.Gamebox[a] == "/images/icon-x.svg") {
          P1.current += 1;
        } else {
          P2.current += 1;
        }
        move.current = 0;
      }
      a += 1;
    }
    a = 0;
    if (
      context.Gamebox[a + 8] &&
      context.Gamebox[a + 4] &&
      context.Gamebox[a] &&
      context.Gamebox[a] == context.Gamebox[a + 4] &&
      context.Gamebox[a + 4] == context.Gamebox[a + 8]
    ) {
      context.setWinner(context.Gamebox[a]);
      if (context.Gamebox[a] == "/images/icon-x.svg") {
        P1.current += 1;
      } else {
        P2.current += 1;
      }
      move.current = 0;
    }
    if (
      context.Gamebox[a + 6] &&
      context.Gamebox[a + 4] &&
      context.Gamebox[a + 2] &&
      context.Gamebox[a + 2] == context.Gamebox[a + 4] &&
      context.Gamebox[a + 4] == context.Gamebox[a + 6]
    ) {
      context.setWinner(context.Gamebox[a + 2]);
      if (context.Gamebox[a] == "/images/icon-x.svg") {
        P1.current += 1;
      } else {
        P2.current += 1;
      }
      move.current = 0;
    }
    if (move.current == 10) {
      context.setWinner("tie");
      tie.current += 1;
    }
  }
  useEffect(() => {
    win();
  }, [context.Gamebox]);

  return (
    <>
      <div
        className={`  bg-[#1A2A33] pl-[24px] pr-[23px] md:pl-[154px] md:pr-[154px] lg:pr-[450px] lg:pl-[530px] pt-[24px] md:pt-[201px] lg:pt-[139px] pb-[127px] md:pb-[200px] lg:pb-[138px] min-h-[100vh] overflow-hidden `}
      >
        <header className="flex items-center justify-between w-[100%] mb-[64px] md:mb-[20px] lg:w-[460px]">
          <img className="w-[72px] h-[32px]" src="/images/logo.svg" />
          <div className="flex items-center gap-[8px] md:gap-[13px] px-[15px] md:px-[30px] py-[10px] md:py-[15px] ml-[-30px] bg-[#1F3641] shadow-[0px_4px_0px_0px_#10212A] rounded-[5px] md:w-[140px] md:h-[52px]  ">
            <img
              className="w-[16px] md:w-[20px] h-[16px] md:h-[20px] "
              src={
                context.playWith
                  ? "/images/cross-chosen.svg"
                  : "/images/oval-chosen.svg"
              }
            />
            <p className="text-[14px] md:text-[16px] text-[#A8BFC9] font-bold tracking-[0.875px] md:tracking-[1px] ">
              TURN
            </p>
          </div>
          <div
            className="flex px-[16px]  py-[14px]  bg-[#A8BFC9] shadow-[0px_4px_0px_0px_#6B8997] rounded-[10px] "
            onClick={() => context.setRestart(true)}
          >
            <img className="w-[20px] h-[20px]" src="/images/icon-restart.svg" />
          </div>
        </header>
        <section>
          <div className="flex flex-wrap gap-x-[20px] gap-y-[20px] ">
            {context.Gamebox.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` flex items-center justify-center w-[96px] md:w-[140px] h-[88px] md:h-[132px] rounded-[10px] bg-[#1F3641]  shadow-[0px_4px_0px_0px_#10212A] md:shadow-[0px_8px_0px_0px_#10212A] bg-no-repeat bg-[length:66px_66px] bg-center ${
                    context.Gamebox[index]? "":context.playWith
                      ? ' hover:bg-[url("/images/icon-x-outline.svg")] '
                      : ' hover:bg-[url("/images/icon-o-outline.svg")] '
                  } `}
                  onClick={() => {
                    change = [...context.Gamebox];
                    change[index] = context.playWith
                      ? "/images/icon-x.svg"
                      : "/images/icon-o.svg";
                    context.setGamebox([...change]),
                      params.game == "multiplayer"
                        ? context.setPlayWith(!context.playWith)
                        : null;
                    params.game == "sologame" ? setPCmove(!PCmove) : null;
                  }}
                >
                  <img src={item} />
                </div>
              );
            })}
          </div>
          <div className=" flex justify-between mt-[24px] md:mt-[28px] lg:w-[460px]">
            <div className=" w-[96px] md:w-[140px] h-[64px] md:h-[72px] flex flex-col items-center justify-center bg-[#31C3BD] rounded-[10px] ">
              <p className="text-[14px] text-[#1A2A33] font-medium tracking-[0.875px] ">
                X {params.game == "sologame" ? "(YOU)" : "(P2)"}
              </p>
              <p className="text-[20px] md:text-[24px] text-[#1A2A33] font-bold tracking-[1.25px] tracking-[1.5px] ">
                {P1.current}
              </p>
            </div>
            <div className=" w-[96px] md:w-[140px] h-[64px] md:h-[72px] flex flex-col items-center justify-center bg-[#A8BFC9] rounded-[10px] ">
              <p className="text-[14px] text-[#1A2A33] font-medium tracking-[0.875px] ">
                TIES
              </p>
              <p className="text-[20px] md:text-[24px] text-[#1A2A33] font-bold tracking-[1.25px] tracking-[1.5px] ">
                {tie.current}
              </p>
            </div>
            <div className=" w-[96px] md:w-[140px] h-[64px] md:h-[72px] flex flex-col items-center justify-center bg-[#F2B137] rounded-[10px] ">
              <p className="text-[14px] text-[#1A2A33] font-medium tracking-[0.875px] ">
                O {params.game == "sologame" ? "(CPU)" : "(P1)"}
              </p>
              <p className="text-[20px] md:text-[24px] text-[#1A2A33] font-bold tracking-[1.25px] tracking-[1.5px] ">
                {P2.current}
              </p>
            </div>
          </div>
        </section>
      </div>
      <div
        className={` ${
          context.Restart || context.winner ? "block" : "hidden"
        } absolute top-[0] bg-[#000000] bg-opacity-50 h-[100vh] w-[100vw] `}
      />
      <Restart />
      <Winner />
    </>
  );
}

export default Game;
