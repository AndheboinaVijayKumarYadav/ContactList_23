import React ,{useState} from 'react';
function ContactCard(props) {
    const [showAge,setShowAge] = useState(false);
    
    return (
        <div className = 'contact-card'>
                <img src={props.avatar} alt="profile" />
                <div className="user-details">
                        <p>Name: {props.name}</p>
                        <p>Email: {props.email}</p>
                        <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
                        {showAge && <p>Age: {props.age}</p> }
                </div>
        </div>
    );
}

export default ContactCard;