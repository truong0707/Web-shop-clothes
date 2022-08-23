import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductHome } from '../../store/redux/actions/ProductActions';
import BoundaryLine from '../BoundaryLine';
import BoundaryLineText from '../BoundaryLineText';
import ButtonLoadMore from '../ButtonLoadMore';
import CardProduct from '../CardProduct';
import main_img_home from '../../assets/images/main_img_home.jpg';
import BackdropProgressLoading from '../BackdropProgressLoading';

export default function BodyHome() {
    /* data store */
    const productListHome = useSelector((state: any) => state.productListHome) // lấy dữ liệu từ kho redux
    const dispatch = useDispatch() // sử dụng dispath --> add action
    const { loading, error, products } = productListHome;

    const limitProductTypeInit = {
        limitType1: 5,
        limitType2: 5,
    }
    const [limit, setLimit] = useState(limitProductTypeInit);
    const [productType1, setProductType1] = useState([]);
    const [productType2, setProductType2] = useState([]);



    useEffect(() => {
        /* snapshot dispach để call api với limit  */
        const productListPromise = listProductHome(limit);
        productListPromise(dispatch);

    }, [dispatch, limit])


    useEffect(() => {
        if (products.productType1) {
            setProductType1(products.productType1);
            setProductType2(products.productType2);
        }
    }, [products])

    /* handle load more list product Type1 */
    const handleShowMoreListProductType1 = () => {
        setLimit({
            limitType1: limit.limitType1 + 5,
            limitType2: limit.limitType2,
        });
    }

    /* handle load more list product Type2 */
    const handleShowMoreListProductType2 = () => {
        setLimit({
            limitType1: limit.limitType1,
            limitType2: limit.limitType2 + 5,
        });
    }

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

                <div /* style={{background: 'blue'}} */ className='wrapper__content__home'>
                    <BoundaryLine />
                    <div /* style={{ background: 'pink' }} */ className="list-products-body-home">
                        {
                            error ? ("errror") : !products ? ("error") : (
                                <>
                                    {productType1.map((product: any) => (
                                        <CardProduct
                                            key={product._id}
                                            productId={product._id}
                                            nameProduct={product.name}
                                            imageProduct={product.image}
                                            priceProduct={product.price}
                                            descriptionProduct={product.description}
                                        />
                                    ))}
                                </>
                            )
                        }
                    </div>
                </div>

                {/*  Button load card Body home */}
                {
                    loading ? <>
                        <div style={{ marginTop: '50px' }} className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </> :
                        <>
                            <ButtonLoadMore
                                classbtnType='button-loat-cards-body-home'
                                handleButton={handleShowMoreListProductType1}
                                contentButton='Load more'
                            />
                        </>
                }



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

                    {/* ProductType 2 */}
                    <div className="list-products-body-home">
                        {
                            error ? ("errror") : !products ? ("error") : (
                                <>
                                    {productType2.map((product: any) => (
                                        <CardProduct
                                            key={product._id}
                                            productId={product._id}
                                            nameProduct={product.name}
                                            imageProduct={product.image}
                                            priceProduct={product.price}
                                            descriptionProduct={product.description}
                                        />
                                    ))}
                                </>
                            )
                        }
                    </div>
                </div>

                {/*  Button load card Body home */}
                {
                    loading ? <>
                        <div style={{ marginTop: '50px' }} className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </> :
                        <>
                            <ButtonLoadMore
                                classbtnType='button-loat-cards-body-home'
                                handleButton={handleShowMoreListProductType2}
                                contentButton='Load more'
                            />
                        </>
                }

                {/* image content */}
                <div className='img__main__bodyHome'>
                    <img src={main_img_home} alt='' />
                    <p className='decription__img__main'>Pellentesque posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an tincidunt risus an consequat delit quisquemos.</p>
                    <div className='box-content-img'>
                        <div className="btn-go-to-shop"><p>GO TO SHOP</p></div>
                    </div>
                </div>


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
