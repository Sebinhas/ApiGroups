import HeaderApi from "../components/headers/HeaderApi.js";
import DragonBallCard from "../components/cards/DragonBallCard.js";

const DragonBall = () => {
    return (
        <div>
            <HeaderApi page="dragonBall"/>
            <div className="w-full min-h-[calc(100vh-80px)] flex justify-center py-5 items-center">.
                <div className="grid grid-col-1 md:grid-cols-2 md:gap-x-10 xl:grid-cols-3 2xl:grid-cols-4 gap-5 ">
                    <DragonBallCard />
                    <DragonBallCard/>
                    <DragonBallCard/>
                    <DragonBallCard/>
                    <DragonBallCard/>
                    <DragonBallCard/>
                </div>
            </div>
        </div>
    );
}
 
export default DragonBall;