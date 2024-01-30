import HeaderApi from "../components/headers/HeaderApi.js";
import DragonBallCard from "../components/cards/DragonBallCard.js";

const DragonBall = () => {
    return (
        <div>
            <HeaderApi page="dragonBall"/>
            <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center">.
                <div className="grip grip-col-1 gap-5">
                    <DragonBallCard/>
                    <DragonBallCard/>
                    <DragonBallCard/>
                </div>
            </div>
        </div>
    );
}
 
export default DragonBall;