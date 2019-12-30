
import React from 'react'
import { Button } from 'antd'
import Product from './Product/product'
var FontListCss = require('./fontlist.css')
export default class Featured extends React.Component {

    getProductList() {
        let dataList = [{
            id: 1,
            name: "歌单名",
            describe: "让人着迷",
            image:''
        },
        {
            id: 2,
            name: "歌单名",
            describe: "让人着迷"
        },
        {
            id: 3,
            name: "歌单名",
            describe: "让人着迷"
        },
        {
            id: 4,
            name: "歌单名",
            describe: "让人着迷"
        },
        {
            id: 5,
            name: "歌单名",
            describe: "让人着迷"
        },
        {
            id: 6,
            name: "歌单名",
            describe: "让人着迷"
        },
        {
            id: 7,
            name: "歌单名",
            describe: "让人着迷"
        },
        {
            id: 8,
            name: "歌单名",
            describe: "让人着迷"
        },
        {
            id: 9,
            name: "歌单名",
            describe: "让人着迷"
        },
        {
            id: 10,
            name: "歌单名",
            describe: "让人着迷"
        },
        {
            id: 11,
            name: "歌单名",
            describe: "让人着迷"
        },
        {
            id: 12,
            name: "歌单名",
            describe: "让人着迷"
        },
        {
            id: 13,
            name: "歌单名",
            describe: "让人着迷"
        }]
        return dataList;
    }

    render() {
        let dataList = this.getProductList();
        return (
        
            
            dataList.map((item,i)=>(
                <Product Product={item}></Product>
            ))
           
          
        )
    }
}