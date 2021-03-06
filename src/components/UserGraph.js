import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const UserGraph = ({ items }) => {
    const [data, setData] = useState({});

    const rand = () => Math.round(Math.random() * 256);

    useEffect(() => {
        const fillData = async () => {
            // Fill Colors
            const back = [];
            const border = [];

            for (let i = 0; i < items.length; i++) {
                const r = rand();
                const g = rand();
                const b = rand();

                back.push(`rgba(${r}, ${g}, ${b}, 0.2)`);
                border.push(`rgba(${r}, ${g}, ${b}, 1.0)`);
            }

            // Fill data
            const data_aux = [];

            for (let i = 0; i < items.length; i++) {
                await fetch(`https://api.github.com/users/${items[i].login}`)
                    .then(res => res.json())
                    .then(result => {
                        data_aux.push(result.followers);
                    });
            }

            setData({
                labels: [...items.map(item => item.login)],
                datasets: [
                    {
                        label: "# of Followers",
                        data: [...data_aux],
                        backgroundColor: back,
                        borderColor: border,
                        borderWidth: 1
                    }
                ]
            });
        }
        fillData();
    }, [items]);

    return <Bar data={data} />;
}

export default UserGraph;