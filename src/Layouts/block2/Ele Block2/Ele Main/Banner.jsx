import React from 'react'

const Banner = () => {
    return (
        <div classname="content-banner" style={{ backgroundColor: '#EFEFEF' }}>
            <div classname="size-banner">
                <div classname="title-banner" style={{ fontSize: 18, padding: '25px 0px 14px 0px', color: '#000000', textAlign: 'center' }}>
                    <span>Lorem ipsum dolor sit asmet?</span>
                </div>

                <div classname="content-banner" style={{ padding: '10px 0px 20px 0px', fontSize: 16, textAlign: 'center' }}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat.
                        Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat
                        turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia
                        ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent
                        et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue
                        mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper
                        turpis pellentesque a.</p>
                </div>

            </div>
        </div>

    )
}

export default Banner