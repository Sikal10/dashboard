import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Link from "next/link";
import ListTable from "../components/ListTable";


const Products = () => {
    return (
        <div className={"products"}>
            <Sidebar/>

            <div className={"products__content-container"}>
                <Header/>
                <main className={"products__table-container"}>
                    <div className={"products__table-container-top"}>
                        <div className="table-title">Products</div>

                        <Link href={"/users/new"}>
                            <div className={"button"}>
                                Add New
                            </div>
                        </Link>
                    </div>

                    <ListTable />
                </main>
            </div>
        </div>
    );
};

export default Products;