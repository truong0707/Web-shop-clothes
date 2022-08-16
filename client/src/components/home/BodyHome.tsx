import React from 'react'
import BoundaryLine from '../BoundaryLine'
import BoundaryLineText from '../BoundaryLineText'
import ButtonLoadMore from '../ButtonLoadMore'
import CardProduct from '../CardProduct'

export default function BodyHome() {
    return (
        <>
            <div className='body__home__page'>
                {/* trademark */}
                <div className='wrapper__content__home'>
                    <BoundaryLineText />
                    <div className='box__trademark'>
                        <div><img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/brand-1-compressor_250x.jpg?v=1541560760' style={{ width: '100%', height: '100%' }} /></div>
                        <div><img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/brand-2-compressor_250x.jpg?v=1541560776' style={{ width: '100%', height: '100%' }} /></div>
                        <div><img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/brand-3-compressor_250x.jpg?v=1541560797' style={{ width: '100%', height: '100%' }} /></div>
                        <div><img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/brand-5-compressor_250x.jpg?v=1541560823' style={{ width: '100%', height: '100%' }} /></div>
                        <div><img src='https://cdn.shopify.com/s/files/1/0071/4755/2866/files/brand-4-compressor_250x.jpg?v=1541560806' style={{ width: '100%', height: '100%' }} /></div>
                    </div>
                </div>

                <div className='wrapper__content__home'>
                    <BoundaryLine />
                    <div className="list-products-body-home">
                        <CardProduct
                            key={'d'}
                            productId={'d'}
                            imageCard={'https://cdn.shopify.com/s/files/1/0071/4755/2866/products/0ffd0703-7fb5-432a-bf09-5a2d0ad9676a_55d53e4f-b06c-4d57-8586-ee8e7a057cc5_360x.jpg?v=1628615050'}
                            priceCard={'d'}
                            nameCard={'d'}
                            descriptionCard={'d'}
                        />

                        <CardProduct
                            key={'d'}
                            productId={'d'}
                            imageCard={'https://cdn.shopify.com/s/files/1/0071/4755/2866/products/d99b402c-e27b-494d-8784-90e534e0e327_360x.jpg?v=1628593108'}
                            priceCard={'d'}
                            nameCard={'d'}
                            descriptionCard={'d'}
                        />

                        <CardProduct
                            key={'d'}
                            productId={'d'}
                            imageCard={'https://cdn.shopify.com/s/files/1/0071/4755/2866/products/bc4b6309-e102-45e2-b260-b84db2f3e762_360x.jpg?v=1628592873'}
                            priceCard={'d'}
                            nameCard={'d'}
                            descriptionCard={'d'}
                        />

                        <CardProduct
                            key={'d'}
                            productId={'d'}
                            imageCard={'https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-2-compressor_800x_crop_center.jpg?v=1541556026'}
                            priceCard={'d'}
                            nameCard={'d'}
                            descriptionCard={'d'}
                        />

                        <CardProduct
                            key={'d'}
                            productId={'d'}
                            imageCard={'https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-2-compressor_800x_crop_center.jpg?v=1541556026'}
                            priceCard={'d'}
                            nameCard={'d'}
                            descriptionCard={'d'}
                        />

                        <CardProduct
                            key={'d'}
                            productId={'d'}
                            imageCard={'https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-2-compressor_800x_crop_center.jpg?v=1541556026'}
                            priceCard={'d'}
                            nameCard={'d'}
                            descriptionCard={'d'}
                        />

                        <CardProduct
                            key={'d'}
                            productId={'d'}
                            imageCard={'https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-2-compressor_800x_crop_center.jpg?v=1541556026'}
                            priceCard={'d'}
                            nameCard={'d'}
                            descriptionCard={'d'}
                        />
                        {/* {
                            loading ? ("loading...") : error ? ("errror") : (
                                <>
                                    {products.slice(0, limit).map((card) => (
                                        <CardProduct
                                            key={card._id}
                                            productId={card._id}
                                            imageCard={card.imgCard}
                                            priceCard={card.Price}
                                            nameCard={card.nameCard}
                                            descriptionCard={card.descriptionCard}
                                        />
                                    ))}
                                </>
                            )
                        } */}
                    </div>
                    {/*  Button load card Body home */}
                    <ButtonLoadMore
                        classbtnType='button-loat-cards-body-home'
                        // handleButton={handleShowMoreCard}
                        contentButton='Load more'
                    />
                </div>


                {/* Product 2 */}
                <div className='wrapper__content__home'>
                    <BoundaryLineText />
                    <div className='img__Featured'>
                        <div className="card" >
                            <img src="https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-1-compressor_800x_crop_center.jpg?v=1541556010" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>

                            {/* btn shop now */}
                            {/* <Button
                                classbtnType='button-shop-now-body-home'
                                contentButton='Shop now' /> */}
                        </div>

                        <div className="card" >
                            <img src="https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-2-compressor_800x_crop_center.jpg?v=1541556026" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            {/* <Button
                                classbtnType='button-shop-now-body-home'
                                contentButton='Shop now' /> */}
                        </div>

                        <div className="card" >
                            <img src="https://cdn.shopify.com/s/files/1/0071/4755/2866/files/custom-block-3-compressor_800x_crop_center.jpg?v=1541556068" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            {/* <Button
                                classbtnType='button-shop-now-body-home'
                                contentButton='Shop now' /> */}
                        </div>
                    </div>
                </div>

                <div className='wrapper__content__home'>
                    <div style={{ marginTop: "40px" }}>
                        <BoundaryLineText />
                    </div>
                    <div className="list-products-body-home">
                        {/* {
                            loading ? ("loading...") : error ? ("errror") : (
                                <>
                                    {products.slice(0, limit).map((card) => (
                                        <CardProduct
                                            key={card._id}
                                            productId={card._id}
                                            imageCard={card.imgCard}
                                            nameCard={card.nameCard}
                                            descriptionCard={card.descriptionCard}
                                        />
                                    ))}
                                </>
                            )
                        } */}
                    </div>
                    {/*  Button load card Body home */}
                    {/* <Button
                        classbtnType='button-loat-cards-body-home'
                        handleButton={handleShowMoreCard}
                        contentButton='Load more' /> */}
                </div>

                {/* image content */}
                {/* <div className='img__main__bodyHome'>
                    <img src={main_img_home} alt='' />
                    <p className='decription__img__main'>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an tincidunt risus an consequat delit quisquemos.</p>
                    <div className='box-content-img'>
                        <div className="btn-go-to-shop"><p>GO TO SHOP</p></div>
                    </div>
                </div> */}


                <div style={{ width: '91%', margin: 'auto' }}>
                    <div className='content__body__home'>
                        <div className='wrap__slider__product'>
                            {/* <SliderProduct />
                            <Button
                                classbtnType='button-loat-cards-body-home'
                                contentButton='VIEW GALLERY'
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
