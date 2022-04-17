
import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { productSuccess} from '../Redux/Action/Product';
import { useSelector } from "react-redux";
export const Home = () => {

    const storeProduct = useSelector(store => store)
    const dispatch = useDispatch()
const  [data, setData] = useState([]);

const getData = () => {
    axios.get('http://localhost:8800/menu').then((res) => {
        // console.log('first', res.data);
        setData([...res.data]);
        dispatch(productSuccess(res.data))
    })
}

console.log(storeProduct)
    return (
        <>
        <div>saurav</div>
        <button onClick={getData}>getData</button>
        </>
    )
}