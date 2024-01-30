import Image from "next/image";





const DragonBall = () => {

    return (
        <div className="w-full rounded-full md:max-w-[360px] min-w-[300px] bg-slate-700 flex py-5 ">
            <div className="w-full flex flex-col ">
                <div className="w-full justify-center items-center flex">
                    <Image/>
                </div>
            </div>
        </div>
    )
}

export default DragonBall;