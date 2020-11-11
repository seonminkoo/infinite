import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';
import Axios from 'axios';
//import { areaCont } from './Section/Datas';
//import { useDispatch } from 'react-redux';

function ProductInfo(props) {

    //FindOneAndUpdate으로 view만 뽑아서 수정
    //저장하기
    //productSchema.findOneAndUpdate({})

    /*
    const [View, SetView] = useState(1)

    useEffect(() => {

        if (props.detail.views && props.detail.views.length >= 0) {
            let views = 0

            props.detail.views && props.detail.views.map(item => {
                SetView(views++)
            })
        }

        const body = {
            writer: props.user.userData._id,
            views : View
        }

        Axios.post("/api/product", body)
        .then(response => {
            if(response.data.success){
                alert('저장 성공')
                props.history.push('/')
            }
            else{
                alert('저장 실패')
            }
        })

    }, [props.detail])

    */


    return (
        <div>
            <Descriptions title="장학 상세 정보">
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
