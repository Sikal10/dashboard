import User from "../../containers/User";
import Title from "../../components/Title";

const UserPage = () => {
    return (
        <div>
            <Title title={"Customer - John Doe"} />
            <User />
        </div>
    );
};

export default UserPage;