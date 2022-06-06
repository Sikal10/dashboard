import Users from "../../containers/Users";
import Title from "../../components/Title";

const UsersPage = () => {
    return (
        <div>
            <Title title={"Customers"} />
            <Users />
        </div>
    );
};

export default UsersPage