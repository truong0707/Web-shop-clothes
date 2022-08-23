import React from 'react';
import BodyShop from '../components/shop/BodyShop';
import HeaderShop from '../components/shop/HeaderShop';

export default function Shop() {
    return (
        <div style={{ marginTop: '64px' }}>
            <HeaderShop />
            <BodyShop />
        </div>
    )
}
