import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UsersTable from "../components/UsersTable";
import Link from "next/link";

const Users = () => {
    return (
        <div className={"users"}>
            <Sidebar/>

            <div className={"users__content-container"}>
                <Header/>
                <main className={"users__table-container"}>
                    <div className={"users__table-container-top"}>
                        <div className="table-title">Customers</div>

                        <Link href={"/users/new"}>
                            <div className={"button"}>
                                Add New
                            </div>
                        </Link>
                    </div>

                    <UsersTable/>
                </main>
            </div>
        </div>
    );
};

export default Users;