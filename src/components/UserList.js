import React, { useState } from "react";
import UserInput from "./UserInput";
import UserListItem from "./UserListItem";

const UserList = () => {
    const [users, setUsers] = useState({
        loading: false,
        error: null,
        items: []
    });

    const onSearch = data => {
        setUsers({ loading: true });

        fetch(`https://api.github.com/search/users?q=${data.search}&per_page=10`)
            .then(res => res.json())
            .then(result => {
                setUsers({
                    items: [...result.items],
                    error: null,
                    loading: false
                });
            });
    }

    return <div className="flex flex-col">
        <div className="mx-auto mt-8">
            <UserInput onSearch={onSearch} />
        </div>

        <hr className="text-gray-900 my-4" />

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