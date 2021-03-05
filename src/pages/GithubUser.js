import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const GithubUser = () => {
    const [user, setUser] = useState({
        loading: true,
        item: null,
        error: null
    });
    const { name } = useParams();

    useEffect(() => {
        setUser({ loading: true });

        fetch(`https://api.github.com/users/${name}`)
            .then(res => res.json())
            .then(result => {
                let item = null;
                let error = null;

                if (!!result.login) item = result;
                else error = result;

                setUser({
                    item,
                    error,
                    loading: false
                });
            });
    }, [name]);

    return <>{user.loading ? <div>Loading...</div>
        : user.error !== null ? <div>{user.error.message}</div>
            : user.item.login}</>;
}

export default GithubUser;