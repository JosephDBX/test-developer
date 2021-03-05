import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const UserInput = ({ onSearch }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => onSearch(data);

    const mismath = value => !value.toLowerCase().includes("react");

    return <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row space-x-6 items-start">
        <div>
            <input
                name="search"
                className={`input input-primary ${!!errors.search ? "input-error" : ""}`}
                placeholder="Github user name..."
                ref={register({
                    required: {
                        value: true,
                        message: "Github user name is required!"
                    },
                    minLength: {
                        value: 4,
                        message: "You must enter at least 4 digits!"
                    },
                    validate: {
                        mismath
                    }
                })} />

            <p className="font-light text-red-400">
                {!!errors.search
                    && errors.search.type === "mismath"
                    ? "You cannot search by 'react'!"
                    : errors.search?.message}
            </p>
        </div>

        <button type="submit" className="btn btn-primary">
            <span className="mr-2">Search</span>
            <FontAwesomeIcon icon={faSearch} size="1x" />
        </button>
    </form>;
}

export default UserInput;