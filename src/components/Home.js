import Featuredinfo from "./Featuredinfo";
import Chart from "./Chart"
import './home.css';
import WidgetSm from "./WidgetSm";
import WidgetLg from "./WidgetLg";
import { userData } from "./dummyData";


function Home(){
    return(
        <div className="home">
            <Featuredinfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
               
         </div>
    )
}

export default Home;