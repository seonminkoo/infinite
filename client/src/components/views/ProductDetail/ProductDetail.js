import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductImage from './Section/ProductImage';
import ProductInfo from './Section/ProductInfo';
import { Row, Col } from 'antd';


function ProductDetail(props) {

    const productId = props.match.params.products_by_id
    const [Product, setProduct] = useState({}) //([])
    console.log("hi",productId)

    useEffect(() => {
        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })
            //product.js의 find 확인할 것.
            .catch(err => alert(err))
    }, [])


    return (
    
        <div style={{ width: '100%', padding: '3rem 4rem' }}>
            <p>hello?</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Product.title}</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} sm={24}> 
                    <ProductImage detail={Product} />
                </Col>
                <Col lg={12} sm={24}>
                   
                    <ProductInfo detail={Product} />
                </Col>
            </Row>
        </div>
    )
    
}

export default ProductDetail
