'use client'

import { CartList } from './data'

export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartList />
            <CartList />
        </div>
    )
}