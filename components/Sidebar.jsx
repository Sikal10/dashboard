import React from 'react';
import {RiDashboardFill} from "react-icons/ri";
import {FaUser} from "react-icons/fa";
import {MdOutlineStoreMallDirectory} from "react-icons/md";
import {MdExitToApp, MdCreditCard, MdLocalShipping, MdInsertChart, MdNotifications, MdSettings} from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className={"sidebar"}>
            <div className={"sidebar__top"}>
                <h3>Admin</h3>
            </div>

            <hr/>

            <div className={"sidebar__center"}>
                <div className={"sidebar__center-container"}>
                    <p className={"title"}>Main</p>
                    <div  className={"item"}>
                        <RiDashboardFill className={"icon"} />
                        <Link href={"/"}><span>Dashboard</span></Link>
                    </div>

                    <p className={"title"}>Lists</p>
                    <div className={"item"}>
                        <FaUser className={"icon"} />
                        <Link href={"/users"}><span>Users</span></Link>
                    </div>
                    <div className={"item"}>
                        <MdOutlineStoreMallDirectory className={"icon"} />
                        <Link href={"/products"}><span>Products</span></Link>
                    </div>
                    <div className={"item"}>
                        <MdCreditCard className={"icon"} />
                        <span>Orders</span>
                    </div>
                    <div className={"item"}>
                        <MdLocalShipping className={"icon"} />
                        <span>Delivery</span>
                    </div>
                    <p className={"title"}>Useful</p>
                    <div className={"item"}>
                        <MdInsertChart className={"icon"} />
                        <span>Stats</span>
                    </div>
                    <div className={"item"}>
                        <MdNotifications className={"icon"} />
                        <span>Notifications</span>
                    </div>

                    <p className={"title"}>Service</p>
                    <div className={"item"}>
                        <MdSettings className={"icon"} />
                        <span>Settings</span>
                    </div>
                    <div className={"item"}>
                        <MdSettings className={"icon"} />
                        <span>Logs</span>
                    </div>

                    <p className={"title"}>User</p>
                    <div className={"item"}>
                        <MdExitToApp className={"icon"} />
                        <span>Profile</span>
                    </div>
                    <div className={"item"}>
                        <MdExitToApp className={"icon"} />
                        <span>Logout</span>
                    </div>
                </div>

            </div>

            <div className={"sidebar__bottom"}>
                <p className={"theme"}>Theme</p>
                <div className={"sidebar__bottom-container"}>
                    <div className={"colorOption"}/>
                    <div className={"colorOption"}/>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;