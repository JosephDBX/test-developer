import React, { useState } from "react";
import UserGraph from "../components/UserGraph";
import UserList from "../components/UserList";

const Home = () => {
    const [users, setUsers] = useState({
        loading: false,
        items: []
    });

    // Fetch users data on search button pressed
    const onSearch = data => {
        setUsers({ ...users, loading: true });

        fetch(`https://api.github.com/search/users?q=${data.search}&per_page=10`)
            .then(res => res.json())
            .then(result => {
                setUsers({
                    items: [...result.items],
                    loading: false
                });
            });
    }

    return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="col-span-1 mt-8">
            <UserList onSearch={onSearch} users={users} />
        </div>

        <div className="col-span-1 xl:col-span-2 mt-8">
            <UserGraph items={users.items} />
        </div>
    </div>;
}

export default Home;