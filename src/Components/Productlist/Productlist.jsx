import './Productlist.css';
import Card from '../ProductItem/productItem';


export default function Productlist(props) {
    return (
        <div className='list'>
            {props.data.map((productsItem) => <Card
                dataItem={productsItem}
                key={productsItem.id}
            />)}
        </div>
    )
}