import React from 'react';
import {MdMoreVert, MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
    return (
        <div className={"featured"}>
            <div className="top">
                <h1 className={"title"}>Total Revenue</h1>
                <MdMoreVert className={"icon"} />
            </div>

            <div className="bottom">
                <div className={"featuredChart"}>
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </div>

                <p className="title">Total sales made today</p>
                <p className="amount">$400</p>
                <p className="desc">Previous transactions processing.
                    Last payments may not be included.
                </p>


                <div className="summary">
                    <div className="summary__item">
                        <div className="summary__item-title">
                            Target
                        </div>

                        <div className="summary__item-result positive">
                            <MdKeyboardArrowUp className={"icon"} />
                            <div className="result-amount">$12.5k</div>
                        </div>
                    </div>

                    <div className="summary__item">
                        <div className="summary__item-title">
                            Last Week
                        </div>

                        <div className="summary__item-result negative">
                            <MdKeyboardArrowDown className={"icon"} />
                            <div className="result-amount">$12.5k</div>
                        </div>
                    </div>

                    <div className="summary__item">
                        <div className="summary__item-title">
                            Last Month
                        </div>

                        <div className="summary__item-result positive">
                            <MdKeyboardArrowUp className={"icon"} />
                            <div className="result-amount">$12.5k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;