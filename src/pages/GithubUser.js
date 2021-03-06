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

    // Fetch current user data from query param
    useEffect(() => {
        setUser({ loading: true });

        fetch(`https://api.github.com/users/${name}`)
            .then(res => res.json())
            .then(result => {
                let item = null;
                let error = null;

                // Verify if current user exist
                if (!!result.login) item = result;
                // asign the result to error, because the api fetch "Not Found" to result
                else error = result;

                setUser({
                    item,
                    error,
                    loading: false
                });
            });
    }, [name]);

    return <>{user.loading
        ? <div className="my-4 text-center text-gray-600 font-medium">Loading...</div>
        : user.error !== null
            ? <div className="my-4 mx-auto justify-center w-96">
                <UserError title={user.error.message} message={`User name: "${name}", ${user.error.message}`} />
            </div>
            : <div className="my-4 mx-auto justify-center w-80">
                <UserDetail user={user.item} />
            </div>}
    </>;
}

export default GithubUser;