import { Search_Url,Sidebar_logo,Youtube_logo,User_logo } from "../utils/constant";

const Header=()=>{
    return (
        <div className="grid grid-flow-col m-2 p-5 shadow-lg">
            <div className="flex col-span-1">
                <img alt="sidebar" src={Sidebar_logo} className="h-8 mx-3"></img>
                <img alt="youtube.." src={Youtube_logo} className="h-8 mx-3"></img>
            </div>
            <div className="col-span-10 px-15 ">
                <input type="text" placeholder="Search..." className="w-1/2 p-2 rounded-l-full border border-gray-400"></input>
                <button className="border border-gray-400  p-2 mt-2 rounded-r-full">🔍</button>
            </div>
            <div>
                <img alt="user" src={User_logo} className="h-9 col-span-1"></img>
            </div>
            
        </div>
    );
};
export default Header;