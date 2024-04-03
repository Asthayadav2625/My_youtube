const Sidebar=()=>{
    return (
        <div className="w-2">
            <ul>
                <li>Home</li>
                <li> Shorts</li>
                <li> Subscription</li>
            </ul>
            <h1 className="font-bold">Subscription</h1>
              <ul>
                <li>Games</li>
                <li>History</li>
                <li>Liked videos</li>
              </ul>
              <h1 className="font-bold">You</h1>
              <ul>
                <li>Your channel</li>
                <li>your videos</li>
                <li> watch later</li>
              </ul>
        </div>
    )
};
export default Sidebar;