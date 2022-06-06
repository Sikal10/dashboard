import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {MdOutlineDriveFolderUpload} from "react-icons/md";
import Link from "next/link";

const NewProduct = ({productsInput, title}) => {
    const [file, setFile] = useState("");

    const defaultImage = "https://nenjudo.ocnk.net/data/nenjudo/product/20180622_9b559e.png";

    return (
        <section className={"new__product"}>
            <div className={"new__product-container"}>
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

                                {productsInput.map((input, index) => <div key={index} className="form-input">
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder}/>
                                </div>)}


                                <Link href={"/"}><button>Add Product</button></Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewProduct;