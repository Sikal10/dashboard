import Products from "../../containers/Products";
import Title from "../../components/Title";

const ProductsPage = () => {
    return (
        <div>
            <Title title={"Products"} />
            <Products />
        </div>
    );
};

export default ProductsPage;