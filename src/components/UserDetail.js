import React from "react";

const UserDetail = ({ user }) => {
    return <div className="my-4 mx-auto p-4 w-80 border-green-300 border-2 rounded-md">
        <h3 className="text-green-600 font-bold">Name: {user.name}</h3>

        <p className="text-gray-500 font-light">
            <span className="font-semibold">Id:&nbsp;</span>
            <span>{user.id}</span>
        </p>

        <div className="w-40 h-40 my-4 mx-auto rounded-full border-2 border-green-300">
            <img className="rounded-full" src={user.avatar_url} />
        </div>

        <p className="text-gray-600">
            <span className="font-semibold">Description:&nbsp;</span>
            <span>{user.bio}</span>
        </p>
    </div>;
}

export default UserDetail;