import { useState } from "react/cjs/react.development";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({income,expense, addTransaction}) => {
    const [isShow, setIsShow] = useState(false);
    return ( 
        <>
        <div className="topSection">
            <p>balance : {income - expense}</p>
            <button onClick={ () => setIsShow( ( pervState ) => !pervState ) } className={`btn ${ isShow && "cancel" }`}>{isShow ? "cancel" : "Add"}</button>
        </div>
        {   
            isShow && <TransActionForm addTransaction={addTransaction} setIsShow={setIsShow}/>
        }
        <div className="resultSection">
            <div className="expenseBox"> Expense: <span style={{ color: "red" }}>{expense} $</span> </div>
            <div className="expenseBox"> Income: <span>{income} $</span> </div>
        </div>
        </>
    );
}
 
export default OverViewComponent;