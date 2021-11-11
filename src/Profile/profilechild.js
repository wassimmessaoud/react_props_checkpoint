import React from "react";
import PropTypes from "prop-types";

const ChildProfile =(props) =>{
    const {
        handleName,
        fullName,
        bio,
        profession,
        children
    } = props
    const styleTitle = {color :'blue' , textAlign :'center'}
    return(
        <div>
            {handleName(fullName)}
            <h1 style={styleTitle}>{props.fullName}</h1>
            <h1 style={styleTitle}>{props.bio}</h1>
            <h1 style={styleTitle}>{props.profession}</h1>
            {props.children}
        </div>

    )
}
childProfile.PropTypes = {
    fullName : PropTypes.string.isRequired,
    handleName : PropTypes.func,
    bio : PropTypes.string,
    profession : PropTypes.string
}
export default ChildProfile;