import { useState } from "react/cjs/react.development";

const TransActionForm = ({addTransaction, setIsShow}) => {
    const [formValues, setFormValues] = useState({
        type: "expense",
        amount: "",
        desc: "",
    });
    const changeHandler = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        addTransaction(formValues);
        setIsShow(false);
    }
    return ( 
        <form onSubmit={submitHandler}>
            <input type="text" name="desc" onChange={changeHandler} value={formValues.desc} placeholder="description"/>
            <input type="number" name="amount" onChange={changeHandler} value={formValues.amount} placeholder="amount"/>
            <div className="radioBox">
                <input id="expense" type="radio" value="expense" name="type" onChange={changeHandler} checked={formValues.type === "expense"}/>
                <label htmlFor="expense">Expense</label>
                <input id="Income" type="radio" value="income" name="type" onChange={changeHandler} checked={formValues.type === "income"}/>
                <label htmlFor="Income">Income</label>
            </div>
            <button type="submit" className="btn primary">Add transaction</button>
        </form>
    );
}
 
export default TransActionForm;