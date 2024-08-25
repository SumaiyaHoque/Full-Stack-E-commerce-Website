import React from 'react'
import { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';

const Product = () => {
    const { all_product } = useContext(ShoopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
    return (
        <div>
            <Breadcrum product={product } />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts/>
        </div>
    )
}
export default Product