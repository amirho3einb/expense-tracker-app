const TransActionComponent = ({transactions}) => {
    return ( 
        <section>
            {transactions.map((item) =>
                <div key={item.id}>
                    <div>
                        {item.desc}
                    </div>
                </div>
            )}
        </section>
    );
}
 
export default TransActionComponent;