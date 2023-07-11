import React from "react";
import Updateitem from "./UpdateItem";
function Updates()
{
    return(
        <div className="updates">
            <h1 className="title1">UPDATES</h1>
            <div className="scrollable-container">
            <div class="scrollable-content" >
            <Updateitem />
            <Updateitem />
            <Updateitem />
            <Updateitem />
            <Updateitem />
            </div>
            </div>

        </div>
    );
}
export default Updates;