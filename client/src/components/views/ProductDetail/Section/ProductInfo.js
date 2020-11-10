import React from 'react'
import { Button, Descriptions } from 'antd';
//import { areaCont, stateCont } from './Section/Datas';
//import { useDispatch } from 'react-redux';

function ProductInfo(props) {

    return (
        <div>
            <Descriptions title="장학 상세 정보">
                <Descriptions.Item label="지역">{props.detail.areaCont}</Descriptions.Item>
        
                <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>

            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <Button size="large" shape="round" type="danger" onClick>
                    관심등록
                </Button>
            </div>
        </div>
    )
}

export default ProductInfo