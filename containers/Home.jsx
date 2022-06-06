import Widget from "../components/Widget";
import Featured from "../components/Featured";
import Chart from "../components/Chart";
import ListTable from "../components/ListTable";


const Home = () => {
    return (
        <div className={"home"}>
            <div className={"home__content-container"}>
                <main className={"home__content"}>
                    <div className={"widgets"}>
                        <Widget type={"user"} />
                        <Widget type={"order"} />
                        <Widget type={"earnings"} />
                        <Widget type={"balance"} />
                    </div>

                    <div className="charts">
                        <Featured />
                        <Chart />
                    </div>

                    <div className="list__container">
                        <div className="list__container-title">
                            Latest Transactions
                        </div>

                        <ListTable />
                    </div>

                </main>
            </div>
        </div>
    );
};

export default Home;