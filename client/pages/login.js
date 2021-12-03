import React, { useState } from 'react'



function login({ data }) {
    const [test, setTest] = useState(true)


    const login = async () => {
        const res = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                "username": "nadhif111",
                "password": "password"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json()
        console.log(data);
        return {
            props: {
                data
            }
        }
    }


    return (
        <>
            {
                test ?
                    <div>
                        Ini login
                        <button onClick={login}>Login</button>
                    </div>
                    :
                    <div>
                        Ini Bukan login
                    </div>
            }
        </>
    )
}

// export const getStaticProps = async () => {
//     const res = await fetch('https://rickandmortyapi.com/api/character/');
//     // const res = await fetch('http://localhost:3001/auth/register', {
//     //     method: 'POST',
//     //     body: JSON.stringify({
//     //         "username": "dilandrypro",
//     //         "email": "testdilan@gmail.com",
//     //         "password": "password"
//     //     }),
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     }
//     // });

//     const data = await res.json()

//     return {
//         props: {
//             data
//         }
//     }
// }

export default login