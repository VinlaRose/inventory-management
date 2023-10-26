import { useSelector } from "react-redux"
import AddNewSale from "../components/AddNew/AddNewSale"
import ProductTable from "../components/ProductTable/ProductTable"
import SalesTable from "../components/ProductTable/SalesTable"

export const Sales = () => {
    const salesItems = useSelector(state => state.soldItems);
    console.log(salesItems)
    return(
        <div>
            <h1>Sales</h1>
            <AddNewSale/>
            <SalesTable products={salesItems}/>
        </div>
    )
}