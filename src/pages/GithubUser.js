import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import UserDetail from "../components/UserDetail";
import UserError from "../components/UserError";

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
                console.log(item);
            });
    }, [name]);

    return <>{user.loading
        ? <div>Loading...</div>
        : user.error !== null
            ? <div>
                <UserError title={user.error.message} message={`User name: "${name}", ${user.error.message}`} />
            </div>
            : <div>
                <UserDetail user={user.item} />
            </div>}
    </>;
}

export default GithubUser;