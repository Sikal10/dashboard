import User from "../../containers/User";
import Title from "../../components/Title";

const UserPage = () => {
    return (
        <div>
            <Title title={"Customer - John Smith"} />
            <User />
        </div>
    );
};

export default UserPage;