import React, { useState } from "react";
import UserList from "../components/UserList";

const Home = () => {
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

    return <>
        <UserList onSearch={onSearch} users={users} />
    </>;
}

export default Home;