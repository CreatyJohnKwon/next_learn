'use client'

import { CartListProp, cartArr } from './data'
import { useState } from 'react'

export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart</h4>
            {
                cartArr.map((a, i) => {
                    return (
                        <CartList
                            key={i}
                            category={cartArr[i].category}
                            price={cartArr[i].price}
                            geather={cartArr[i].geather}
                            color={"white"}
                        />
                    )
                })
            }
        </div>
    )
}

const CartList: React.FC<CartListProp> = ({ category, price, geather, color }) => {
    let [countNum, setCountNum] = useState(0)

    return (
        <div className="cart-item">
            <p>{category}</p>
            <p>{price}</p>
            <p>{geather}</p>
            <button onClick={() => {
                countNum > 0 ? setCountNum(countNum-1) : alert("0 아래로 내려갈 수 없습니다")
            }} style={{ backgroundColor : color }}>-</button>
            <p style={{ color: color }}>{countNum}</p>
            <button onClick={() => {setCountNum(countNum+1)}} style={{ backgroundColor : color }}>+</button>
        </div>
    )
}