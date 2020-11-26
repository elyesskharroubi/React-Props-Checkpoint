import "./profile.css";
import PropTypes from "prop-types";

function Profile(props) {
    return (
        <div className="profile-container">
            <figure className="pic-frame">{props.children}</figure>
            <h3>{props.name}</h3>
            <p>{props.bio}</p>
            <p>{props.profession}</p>
            <button onClick={() => props.showName(props.name)}>Show Name</button>
        </div>
    )
}

Profile.defaultProps = {
    name : 'Elyess'
}

Profile.propTypes = {
    anyProp: PropTypes.object
}

export default Profile;
