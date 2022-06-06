import NewProduct from "../../../containers/NewProduct";
import {productsInput} from "../../../utils/data";
import Title from "../../../components/Title";

const NewProductsPage = () => {
    return (
        <div>
            <Title title={"Add New Product"} />
            <NewProduct title={"Add New Product"} productsInput={productsInput} />
        </div>
    );
};

export default NewProductsPage;