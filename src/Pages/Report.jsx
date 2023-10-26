import { useSelector } from "react-redux"

export const Report = () => {
    const sales = useSelector(state => state.soldItems)
    const items = useSelector(state => state.items);

    console.log(sales,items)

    return(
    
        <div>
            <h1>Report</h1>
            <div className="box">
                <div className="data">
                    <h3>Total sales:</h3>
                    <h1>{ sales.reduce((total, item) => total + (item.quantity || 0), 0)}</h1>
                </div>
                <div className="data">
                    <h3>Total items:</h3>
                    <h1>{ items.reduce((total, item) => total + (item.quantity || 0), 0)}</h1>
                </div>
                <div className="data">
                    <h3>Total Revenue:</h3>
                    <h1>{ items.reduce((total, item) => total + (item.quantity*item.mrp || 0), 0)}</h1>
                </div>

            </div>
            <div className="footer">
  <p> <a href="https://github.com/VinlaRose/school-management-app">Github</a> </p>
</div>
        </div>
    )
}