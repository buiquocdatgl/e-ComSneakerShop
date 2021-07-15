import React, {useState} from 'react'
import { Form,Input } from 'antd';
import '../Admin/Admin.css'
import { addProduct } from '../../firebase/firestoreCustomFunctions';

function AdminInput({value, placeholder, type,onChange, keyName, nestedOnChange, nestedKey, required}){
    // Value, sẽ nhận giá trị ban đầu của input
    // type, sẽ nhận input có loại là text, hay number, hay email
    // onChange, sẽ nhận function thay đổi khi nhập chữ 
    // keyname, nestedkey, sẽ nhận tên key của object tầng 1, tầng 2
    // nestedOnChange, nhận function đổi giá trị tầng  2

    // Input sẽ nhận value, type ban đầu, khi thay đổi thì sẽ xét, nếu có function thay đổi giá trị tầng 2 thì dùng function đó, else dùng function onchange bình thường
    return (
        <Input
            required={required && required}
            value={value}
            type={type}
            className='keyword_search'
            placeholder={placeholder}
            onChange={(e)=> {
                if (nestedOnChange) {
                    nestedOnChange(keyName, e.target.value, nestedKey)
                } else {
                    onChange(keyName, e.target.value)
                }
                
            }}
        />
    )
}
function Admin() {
    
    const [product, setProduct] = useState({
        name: '',
        price: '',
        pictures: {
            p1: '',
            p2: '',
            p3: '',
            p4: '', 
        },
        brand: '',
        type: '',
        msp: '',
        color: '',
        gender: ''
    })

    const onChange = (key, value) => {
        setProduct({...product, [key]: value })
        // Giữ tất cả key của object product tầng 1, thay đổi tên key = giá trị nhận vào
    }

    const onChangeNested = (key, value, nestedKey) => {
        setProduct({...product, [key]: {...product.pictures, [nestedKey]: value}})
        // Giữ key của object product tầng 1, trong key nhận vào, giữ tất cả key tầng 2, thay đổi key tầng 2 nhận vào = giá trị nhận vào
    }

    const submit = () => {

    }

    return (
        <div className="admin">
            <div className='main_search'>
                <div className='form_search'>
                    <div className="search">
                        <Form>
                            <div className='input_search'>
                            <Form.Item name="keyWord">
                                <AdminInput required={true} value={product.name} onChange={onChange} type='text' keyName='name' placeholder='Nhập tên sản phẩm' className='keyword_search' />
                                <AdminInput required={true} value={product.price} onChange={onChange} type='number' keyName='price' placeholder='Nhập giá sản phẩm' className='keyword_search' />
                                <AdminInput required={true} value={product.brand} onChange={onChange} type='text' keyName='brand' placeholder='Nhập brand sản phẩm ví dụ [Addidas] Nmd' className='keyword_search' />
                                <AdminInput required={true} value={product.type} onChange={onChange} type='text' keyName='type' placeholder='Nhập loại sản phẩm ví dụ Addidas [Nmd]' className='keyword_search' />


                                <AdminInput  value={product.pictures.p1} nestedKey='p1' nestedOnChange={onChangeNested} type='text' keyName='pictures' placeholder='Hình 1' className='keyword_search' />
                                <AdminInput  value={product.pictures.p2} nestedKey='p2' nestedOnChange={onChangeNested} type='text' keyName='pictures' placeholder='Hình 2' className='keyword_search' />
                                <AdminInput  value={product.pictures.p3} nestedKey='p3' nestedOnChange={onChangeNested} type='text' keyName='pictures' placeholder='Hình 3' className='keyword_search' />
                                <AdminInput  value={product.pictures.p4} nestedKey='p4' nestedOnChange={onChangeNested} type='text' keyName='pictures' placeholder='Hình 4' className='keyword_search' />
                            </Form.Item>
                            </div>
                        </Form>
                    </div>
                    <button onClick={()=> {
                        addProduct(product)
                        setProduct({})
                    }} >Log</button>
                </div>
            </div>
        </div>
    )
}

export default Admin
