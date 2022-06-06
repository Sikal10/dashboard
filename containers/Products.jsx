import Link from "next/link";
import ListTable from "../components/ListTable";


const Products = () => {
    return (
        <div className={"products"}>
            <div className={"products__content-container"}>
                <main className={"products__table-container"}>
                    <div className={"products__table-container-top"}>
                        <div className="table-title">Products</div>

                        <Link href={"/products/new"}>
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