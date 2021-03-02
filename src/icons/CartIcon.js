import React from 'react'
import Image from 'next/image'

const CartIcon = () => {
    return (
        <div>
            <Image src="/static/images/cart.svg" height={20} width={20} />
        </div>
    )
}

export default CartIcon
