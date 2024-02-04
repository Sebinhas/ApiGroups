import Image from 'next/image'
import DragonBallLogo from '../../../../public/img/fondosCartas/dragonBallLogo.png'

const DragonBall = () => {
   let fondo

   return (
      <div className="w-full flex flex-col">
         <div className="relative w-full flex h-64 flex-col min-w-[300px] max-w[360px] rounded-t-[20px] bg-slate-700  ">
            <Image
               className="absolute top-3 left-2 w-20"
               src={DragonBallLogo}
               alt=""
            />
            <Image className="flex" src={fondo} alt="" />
         </div>
         <div className="w-full flex justify-center p-5 items-center rounded-b-[20px] bg-slate-300">
            <div className="w-full h-28 flex rounded-[20px] bg-slate-500"></div>
         </div>
      </div>
   )
}

export default DragonBall
