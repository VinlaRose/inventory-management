import { useSelector } from "react-redux"
import AddItem from "../components/AddNew/AddNew"
import ProductTable from "../components/ProductTable/ProductTable"

export const Inventory = () => {
    const products = useSelector((state) => state.items)
    
    return(
        <div>
            <h1>Inventory</h1>
            <AddItem/>
            <ProductTable products={products}/>
            
        </div>
    )
}