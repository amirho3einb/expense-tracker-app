import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const TransActionComponent = ({transactions}) => {
    const [searchItem, setSearchItem] = useState("");
    const [filteredTnx, setFilteredTnx] = useState(transactions);
    // tnx => all tnx should be saved ,
    // search item => !!
    const filterTransactions = (search) => {
        if(!search || search === "") {
            setFilteredTnx(transactions);
            return;
        }
        const filtered = transactions.filter((t) =>
            t.desc.toLowerCase().includes(search.toLowerCase()) 
        );
        setFilteredTnx(filtered);
    };
    const changeHandler = (e) => {
        setSearchItem(e.target.value);
        filterTransactions(e.target.value);
    };
    useEffect(() => {
        filterTransactions(searchItem);
    }, [transactions]);

    if(!transactions.length) return <h3>add some tnx</h3>
    return ( 
        <section>
            <input type="text" value={searchItem} onChange={changeHandler} className="search" placeholder="search for transactions"/>
            {filteredTnx.length ? 
                filteredTnx.map((item) => (
                <div className="transaction"
                     key={item.id}
                     style={{ borderRight: item.type === "expense" && "4px solid red" }}
                >
                    <span>
                        $ {item.desc} 
                    </span>
                    <span>
                        $ {item.amount} 
                    </span>
                    
                   
                </div>
            )) : "No item matchs !" }
        </section>
    );
}
 
export default TransActionComponent;