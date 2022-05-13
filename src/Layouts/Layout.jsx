import React from 'react'
import Block1 from './block1/Block1'
import Block2 from './block2/Block2'

const Layout = () => {
    return (
        <div class="container">
            <div class="grid">
                <Block1 />
                <Block2 />
            </div>
        </div>
    )
}

export default Layout