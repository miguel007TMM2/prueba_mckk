
import { useState, useEffect } from 'react';
import { router } from '../App'
import Login from './login'


function Home() {
    const url = "https://apidev.kanvas.dev/v2/users";
    const [users, setUsers] = useState([]);

    function Logout() {
        localStorage.removeItem("mytime");
      
        router.push("/login");
      }

    const getUsers = async (event) => {

        const token = localStorage.getItem('token');

        const sendUser = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: token,
            },
        });

        const response = await sendUser.json();
        setUsers(response);
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <>
            <div >{users.map((_, key) =>
                <div key={key}>
                    <ul>
                        <li>
                            {_.id}
                        </li>
                        <li>
                            {_.firstname}
                        </li>
                        <li>
                            {_.lastname}
                        </li>
                        <li>
                            {_.email}
                        </li>
                        <li>
                            {_.default_company}
                        </li>
                        <li>
                            {_.created_at}
                        </li>
                        <li>
                            {_.updated_at}
                        </li>
                    </ul>
                </div>
            )}</div>
        </>
    );
}

export default Home;