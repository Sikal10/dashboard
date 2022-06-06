import ListTable from "../components/ListTable";

const User = () => {
    return (
        <section className={"user"}>
            <div className={"user__content-container"}>
                <main className={"user-profile"}>
                    {/*top*/}
                    <div className={"top"}>
                        <article className={"profile"}>
                            <div className="edit-button">Edit</div>
                            <h1 className={"info"}>Information</h1>
                            <div className="item">
                                <img className={"image"} src="/images/me.jpg" alt=""/>
                                <div className="item__details">
                                    <h1 className="title">John Doe</h1>

                                    <div className="detail">
                                        <span className={"key"}>Email: </span>
                                        <span className="value">sikal@gmail.com</span>
                                    </div>

                                    <div className="detail">
                                        <span className={"key"}>Phone: </span>
                                        <span className="value">+2349022019009</span>
                                    </div>

                                    <div className="detail">
                                        <span className={"key"}>Address: </span>
                                        <span className="value">Ikota Villa, Lekki</span>
                                    </div>

                                    <div className="detail">
                                        <span className={"key"}>Country: </span>
                                        <span className="value">Nigeria</span>
                                    </div>

                                </div>
                            </div>
                        </article>

                        <article className={"profile"}>
                            <div className="edit-button">Edit</div>
                            <h1 className={"info"}>Information</h1>
                            <div className="item">
                                <img className={"image"} src="/images/me.jpg" alt=""/>
                                <div className="item__details">
                                    <h1 className="title">John Doe</h1>

                                    <div className="detail">
                                        <span className={"key"}>Email: </span>
                                        <span className="value">sikal@gmail.com</span>
                                    </div>

                                    <div className="detail">
                                        <span className={"key"}>Phone: </span>
                                        <span className="value">+2349022019009</span>
                                    </div>

                                    <div className="detail">
                                        <span className={"key"}>Address: </span>
                                        <span className="value">Ikota Villa, Lekki</span>
                                    </div>

                                    <div className="detail">
                                        <span className={"key"}>Country: </span>
                                        <span className="value">Nigeria</span>
                                    </div>

                                </div>
                            </div>
                        </article>
                    </div>

                    {/*bottom*/}
                    <div className={"bottom"}>
                        <div className="table-container">
                            <h3>Last Transactions</h3>

                            <ListTable />
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default User;