import NewUser from "../../../containers/NewUser";
import Title from "../../../components/Title";

const NewUserPage = () => {
    return (
        <div>
            <Title title={"New User"} />
            <NewUser title={"Add New User"} />
        </div>
    );
};

export default NewUserPage;