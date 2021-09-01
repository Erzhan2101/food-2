import {useHistory} from "react-router-dom";

const BtnBack = () => {

    const history = useHistory();

    return (
        <div>
            <button className="back" onClick={() => history.goBack()}>Back</button>
        </div>
    );
};

export default BtnBack;