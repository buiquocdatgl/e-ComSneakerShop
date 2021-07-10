import React, {useState} from 'react'
import { Form,Input } from 'antd';
import '../Admin/Admin.css'

function AdminInput({value, placeholder, type,onChange, keyName}){
    console.table({keyName, value, placeholder, type, onChange})
    return(
        <Input
            value={value}
            type={type}
            className='keyword_search'
            placeholder={placeholder}
            onChange={(e)=> onChange(keyName, e.target.value)}
        />
    )
}
function Admin() {

    const [product, setProduct] = useState({
        name: '',
        price: '',
        pictures: [],
        type: '',
        msp: '',
        color: '',
        gender: ''
    })

    const onChange = (key, value) => {
        setProduct({...product, [key]: value })
    }

    return (
        <div className="admin">
            <Form.Item name="keyWord">
                <AdminInput value={product.name} onChange={onChange} type='text' keyName='name' placeholder='Nhập tên sản phẩm' />
                <AdminInput value={product.price} onChange={onChange} type='number' keyName='price' placeholder='Nhập giá sản phẩm' />
                <AdminInput value={product.type} onChange={onChange} type='text' keyName='type' placeholder='Nhập loại sản phẩm' />
            </Form.Item>
            <button onClick={()=> console.table(product)} >Log</button>
        </div>
    )
}

export default Admin
