import React from 'react'
import StarRatings from "react-star-ratings";
import "./style.css";
import { Comment, Avatar, Form, Button, Input } from "antd";

const { TextArea } = Input; 

function FormWrite() {
    return (
        <div className="group-form-comment">
            <Form>
                <Comment
                    avatar={
                    <Avatar src='https://firebasestorage.googleapis.com/v0/b/kaitoshop-dat.appspot.com/o/image%2FNotoken.png?alt=media&token=ff71889d-2b27-4031-b7e4-94f87cd407f6' alt="Han Solo" />
                    }
                >
                    <StarRatings
                    numberOfStars={5}
                    name='rating'
                    starDimension="22px"
                    starRatedColor="#fed330"
                    starHoverColor="#fed330"
                    starEmptyColor="none"
                    />
                    <div className="group-length-content">
                        <p>/700</p>
                    </div>
                    <Form.Item name="content">
                        <TextArea
                            placeholder="Mời bạn để lại bình luận"
                            rows={8}
                            max={20}
                            maxLength={700}
                            id="message"
                            className="from-write"
                        />
                    </Form.Item>
                    <Form.Item shouldUpdate={true}>
                        <Button
                         htmlType="submit"
                         type="primary"
                         disabled
                        >
                            Thêm Bình Luận
                        </Button>
                    </Form.Item>
                </Comment>
            </Form>
        </div>
    )
}

export default FormWrite
