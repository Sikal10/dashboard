import {MdSearch, MdOutlineLanguage, MdOutlineDarkMode, MdFullscreenExit} from "react-icons/md";
import {MdNotificationsNone, MdChatBubbleOutline, MdOutlineList} from "react-icons/md";

const Header = () => {
    return (
        <div className={"header"}>
            <div className="header__container">
                <div className="searchbar">
                    <input className={"searchbar__input"} type="text" placeholder={"Search..."}/>
                    <MdSearch className={"icon"} />
                </div>

                <div className="items">
                    <div className="item">
                        <MdOutlineLanguage className={"icon"} />
                        English
                    </div>

                    <div className={"item"}>
                        <MdOutlineDarkMode className={"icon"} />
                    </div>

                    <div className={"item"}>
                        <MdFullscreenExit className={"icon"} />
                    </div>

                    <div className={"item"}>
                        <MdNotificationsNone className={"icon"} />
                        <div className="counter">2</div>
                    </div>

                    <div className={"item"}>
                        <MdChatBubbleOutline className={"icon"} />
                        <div className="counter">2</div>
                    </div>

                    <div className={"item"}>
                        <MdOutlineList className={"icon"} />
                    </div>

                    <div className={"item"}>
                        <img src="/images/me.jpg" className={"avatar"} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;