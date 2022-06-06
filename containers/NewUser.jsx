import React, {useState} from 'react';
import {MdOutlineDriveFolderUpload} from "react-icons/md";
import Link from "next/link";

const NewUser = ({title}) => {

    const [file, setFile] = useState("");

    const defaultImage = "https://nenjudo.ocnk.net/data/nenjudo/product/20180622_9b559e.png";

    return (
        <section className={"new__user"}>
            <div className={"new__user-container"}>
                <div className={"main"}>
                    <div className={"top"}>
                        <h1>{title}</h1>
                    </div>

                    <div className="bottom">
                        <div className="left">
                            <img className={"image"} src={file ? URL.createObjectURL(file) : defaultImage} alt=""/>
                        </div>
                        <div className="right">
                            <form action="">
                                <div className="form-input">
                                    <label htmlFor={"file"}>
                                        Image: <MdOutlineDriveFolderUpload className={"icon"} />
                                    </label>
                                    <input hidden id={"file"} onChange={e => setFile(e.target.files[0])} type="file" />
                                </div>
                                <div className="form-input">
                                    <label>Username</label>
                                    <input type="text" placeholder={"John Doe"}/>
                                </div>
                                <div className="form-input">
                                    <label>Name and Surname</label>
                                    <input type="text" placeholder={"John Doe"}/>
                                </div>
                                <div className="form-input">
                                    <label>Email</label>
                                    <input type="email" placeholder={"john@example.com"}/>
                                </div>
                                <div className="form-input">
                                    <label>Phone</label>
                                    <input type="text" placeholder={"+2349022019009"}/>
                                </div>
                                <div className="form-input">
                                    <label>Address</label>
                                    <input type="text" placeholder={"Ikota Villa"}/>
                                </div>
                                <div className="form-input">
                                    <label>Password</label>
                                    <input type="password" placeholder={"*****"}/>
                                </div>
                                <div className="form-input">
                                    <label>Country</label>
                                    <input type="text" placeholder={"Nigeria"}/>
                                </div>

                                <Link href={"/"}><button>Add User</button></Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewUser;