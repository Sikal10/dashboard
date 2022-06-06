import {
    MdKeyboardArrowUp,
    MdOutlinePersonOutline,
    MdOutlineShoppingCart,
    MdOutlineMonetizationOn,
    MdOutlineAccountBox
} from "react-icons/md";
import Link from "next/link";

const Widget = ({type}) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "Users",
                isMoney: false,
                link: "See all users",
                icon: <MdOutlinePersonOutline style={{
                    color: "crimson",
                    background: "rgba(255, 0, 0, 0.2)",
                }} className={"icon"}/>
            }
            break;
        case "order":
            data = {
                title: "Orders",
                isMoney: false,
                link: "View all orders",
                icon: <MdOutlineShoppingCart style={{
                    color: "goldenRod",
                    background: "rgba(218, 165, 32, 0.2)",
                }} className={"icon"}/>
            }
            break;
        case "earnings":
            data = {
                title: "Earnings",
                isMoney: false,
                link: "View net earnings",
                icon: <MdOutlineMonetizationOn style={{
                    background: "rgba(0, 128, 0, 0.2)",
                    color: "green"
                }} className={"icon"}/>
            }
            break;
        case "balance":
            data = {
                title: "Balance",
                isMoney: true,
                link: "See details",
                icon: <MdOutlineAccountBox style={{
                    color: "purple",
                    background: "rgba(128, 0, 128, 0.2)",
                }} className={"icon"}/>
            }
            break;
        default:
            break;
    }

    return (
        <div className={"widget"}>
            <div className="widget__left">
                <span className="title">{data?.title}</span>
                <span className="counter">{data?.isMoney && "$"} {amount}</span>
                <span className="link"><Link href={`/${data.title.toLowerCase()}`}>
                    {data?.link}
                </Link></span>
            </div>

            <div className="widget__right">
                <div className="percentage positive">
                    <MdKeyboardArrowUp/>
                    {diff} %
                </div>
                {data?.icon}
            </div>

        </div>
    );
};

export default Widget;