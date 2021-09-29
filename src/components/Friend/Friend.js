import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {

    const { id, name, phone, website, address } = props.friend;
    const history = useHistory();
    
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: "10px",
        margin: '10px'
    }

    const url = `/friend/${id}`;

    const handleFriendClick = () => {
        history.push(`/friend/${id}`)
    }

    return (
        <div style={friendStyle}>
            <h2>Id Number : {id}</h2>
            <h2>I am {name}</h2>
            <h5>Call Me : {phone}</h5>
            <p>Visit me : {website}</p>
            <p><small>I live in {address.city}</small></p>
            <Link to={url}>Visit Me !!</Link>
            <br />
            <br />
            <Link to={url}>
                <button>Visit Me !!</button>
            </Link>
            <br />
            <br />
            <button onClick={handleFriendClick}>Visit Me !!!!</button>
        </div>
    );
};

export default Friend;