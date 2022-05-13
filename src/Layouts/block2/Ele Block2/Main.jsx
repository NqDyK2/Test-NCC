import React from 'react'
import Banner from './Ele Main/Banner'
import New from './Ele Main/New1'
import New2 from './Ele Main/New2'
import New3 from './Ele Main/New3'

const Main = () => {
    return (
        <main>
           <Banner />
            <section>
                <New />
                <New2 />
                <New3 />
            </section>
        </main>

    )
}

export default Main