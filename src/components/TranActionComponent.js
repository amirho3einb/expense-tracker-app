const TransActionComponent = ({transactions}) => {
    return ( 
        <section>
            <input type="text" value={} onChange={}/>
            {transactions.length && 
                transactions.map((item) =>
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
            )}
        </section>
    );
}
 
export default TransActionComponent;