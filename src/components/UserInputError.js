import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const UserInputError = ({ title, message }) => {
    return <>
        {message && <div className="error p-2 flex flex-row space-x-6 bg-red-100 rounded-md border-red-500 border-2 text-red-500">
            <FontAwesomeIcon icon={faExclamationCircle} size="4x" />

            <div className="error-text flex flex-col">
                <span className="error-text__title font-bold">{title}</span>

                <span>{message}</span>
            </div>
        </div>}
    </>;
}

export default UserInputError;