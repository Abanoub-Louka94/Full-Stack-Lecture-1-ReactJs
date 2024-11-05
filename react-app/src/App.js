import Challenge1 from "./challenge-1";
import Challenge2 from "./challenge-2";
import Challenge3 from "./challenge-3";
import Challenge4 from "./challenge-4";


export default function MyApp() {
    return (
        <div className="images">
            <div className="image-container">
                <Challenge1/>
            </div>
            <div className="image-container">
                <Challenge2/>
            </div>
            <div className="image-container">
                <Challenge3/>
            </div>
            <div className="head">
                <Challenge4/>
            </div>
        </div>

    );
};