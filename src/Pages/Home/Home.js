import React from 'react'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../Components/Sidebar/SideBar'
import "./Home.scss"

const Home = () => {

    const [greet, setgreet] = useState("")

    const currentDate = new Date();
    const day = currentDate.toLocaleDateString('default', { weekday: 'long' });
    const month = currentDate.toLocaleDateString('default', { month: 'long' });
    const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;


    useEffect(() => {

        let hour = new Date().getHours();

        if (hour < 12) {

            setgreet("Good Morning")

        }
        else if (hour >= 12 && hour < 18) {
            setgreet("Good Afternoon")

        }
        else {
            setgreet("Good Night")
        }

    }, [])

    return (
        <>

            <div className="header">

                <div className="image">
                    <img src={require('../../images/header_img.jpg')} alt="" />
                </div>

                <div className="content">
                    <div className="greeting">
                        <h4>{greet}!</h4>
                    </div>
                    <div className="date">
                        <h4>{date}</h4>
                    </div>
                </div>
            </div>

            <SideBar />

            <div className="container">

                <div className="head">
                    <h1>Welcome to Notes Taking App</h1>
                    <hr />
                </div>
                <Outlet />

            </div>

        </>
    )
}

export default Home;