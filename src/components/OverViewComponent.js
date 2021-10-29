import { useState } from "react/cjs/react.development";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({income,expense, addTransaction}) => {
    const [isShow, setIsShow] = useState(false);
    return ( 
        <>
        <div className="topSection">
            <p>balance : {income - expense}</p>
            <button onClick={ () => setIsShow( ( pervState ) => !pervState ) }>{isShow ? "cancel" : "Add"}</button>
        </div>
        {   
            isShow && <TransActionForm addTransaction={addTransaction}/>
        }
        <div className="resultSection">
            <div> Expense: {expense} </div>
            <div> Income: {income} </div>
        </div>
        </>
    );
}
 
export default OverViewComponent;