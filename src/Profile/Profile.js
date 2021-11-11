import React from "react";
import ChildProfile from "./profilechild.js";
import myimage from "./myimage.jpg";


const Profile =() =>{
    const handleName = (fullName) =>
    alert ('this is ${fullName} profile');
    return(
        <div>
            <childprofile fullName="wassim messaoud" bio="i am a fullstuck js student" profession="web development">
                <img src={myimage} style={{width: 50, height: 50}}/>
            </childprofile>
        </div>
    );
};
export default Profile;
