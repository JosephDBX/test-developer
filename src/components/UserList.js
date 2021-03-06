import React from "react";
import UserInput from "./UserInput";
import UserListItem from "./UserListItem";

const UserList = ({ onSearch, users }) => {
    return <div className="flex flex-col">
        <div className="mx-auto">
            <UserInput onSearch={onSearch} />
        </div>

        <hr className="text-gray-900 my-4 mx-2" />

        {users.loading
            ? <div className="mx-auto text-gray-600 font-medium">Loading...</div>

            : users.items.length > 0
                ? <ul>
                    {users.items.map(user => <li key={user.id}>
                        <UserListItem user={user} />
                    </li>)}
                </ul>
                : <div className="mx-auto text-gray-600 font-medium">No match results!</div>}
    </div>;
}

export default UserList;