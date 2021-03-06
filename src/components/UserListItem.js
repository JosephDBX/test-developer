import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

// Show a single item in the list of searched users
const UserListItem = ({ user }) => {
    return <div className="m-1 px-2 py-1 rounded-sm border-b-2 border-green-300 flex flex-row justify-between space-x-2 items-center">
        <div className="text-gray-500">
            <h3 className="font-medium">Name: {user.login}</h3>

            <span>Id: {user.id}</span>
        </div>

        <Link to={user.login} className="btn btn-secondary rounded-full px-2">
            <FontAwesomeIcon icon={faArrowCircleRight} size="1x" />
        </Link>
    </div>;
}

export default UserListItem;