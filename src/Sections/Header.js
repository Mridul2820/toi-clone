import { Container } from '@material-ui/core';
import React from 'react'
import HeaderMenu from '../components/HeaderMenu';
import HeaderTop from '../components/HeaderTop';

const Header = () => {
    return (
        <div>
            <HeaderTop />
            <Container>
                <div className="logo">
                    <img 
                        className="logo__img"
                        src="https://static.toiimg.com/photo/79638690.cms" 
                        alt="logo"
                    />
                </div>
            </Container>
            <HeaderMenu />
        </div>
    )
}

export default Header
