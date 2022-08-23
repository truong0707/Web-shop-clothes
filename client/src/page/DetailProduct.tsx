import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { listProductDetails } from '../store/redux/actions/ProductActions';



export default function DetailProduct() {
  // Lấy param id sản phẩm
  const location = useLocation();
  const pathId = location.pathname.split("/")[2]; /* cat id  params*/

  const dispatch = useDispatch();
  const productDetail = useSelector((state: any) => state.productDetail);
  const { loading, error, product } = productDetail;

  const productDetailPromise = listProductDetails(pathId);
  useEffect(() => {
    // dispatch(listProductDetails(pathId));
    productDetailPromise(dispatch);

  }, [dispatch, pathId])

  //
  const ref = useRef(null);

  useEffect(() => {
    // ref.current.innerText = 'ccss';
  }, [])

  return (
    <div style={{ marginTop: '100px' }}>
      <div className='wrap__detail__product'>
        {
          loading ? ('loading') : error ? ('err')
            :
            (
              <>
                {/* <p ref={ref}>âsasas</p> */}
                <div className='content__product__detail'>
                  <div className='row wrap__info__product'>
                    <div className='col-xl-3'>
                      <img style={{ width: "100%" }} src={product.image} alt='' />
                    </div>
                    <div className='col-xl-6'>
                      <h5>{product.name}</h5>
                      <p>Giá: <b style={{ color: 'red' }}>{product.price}$</b></p>
                      <p>Trạng thái: còn hàng</p>
                      <p>Chất liệu: Vải jean 100% dày dặn, không bao giãn</p>
                      {/* <p>Kích cỡ: {product.size[0]} - {product.size[1]} - {product.size[2]} - {product.size[3]} - {product.size[4]}</p> */}
                      <p>Màu sắc:</p>

                      <div style={{ marginTop: '104px' }} className='wrap__groupButton__detail'>
                        <div className='button__add__card'><p /* onClick={() => addToCart(productDetail)} */ style={{ margin: 'auto' }}>Thêm vào giỏ hàng</p></div>
                        <div className='button__buy__now'><p style={{ margin: 'auto' }}>Mua ngay</p></div>
                      </div>
                    </div>

                    {/* support online */}
                    <div className='col-xl-3'>
                      <div className='box__support__online'>
                        <div>
                          <p style={{ textAlign: "center" }}>Bạn muốn hỏi về sản phẩm?</p>
                          <p style={{ textAlign: "center" }}>Zalo/Hotline: 0707241906</p>
                          <div className='CS'>chính sách bán hàng</div>
                          <div>
                            <div className='row cs'>
                              <div className='col-xl-1'>s</div>
                              <p className='col-xl-10'>Giao Hàng toàn quốc</p>
                            </div>

                            <div className='row cs'>
                              <div className='col-xl-1'>s</div>
                              <p className='col-xl-10'>Thanh Toán khi nhận hàng </p>
                            </div>

                            <div className='row cs'>
                              <div className='col-xl-1'>s</div>
                              <p className='col-xl-10'>Đổi Trả trong 7 ngày</p>
                            </div>

                            <div className='row cs'>
                              <div className='col-xl-1'>s</div>
                              <p className='col-xl-10'>Hoàn Ngay tiền mặt</p>
                            </div>

                            <div className='row cs'>
                              <div className='col-xl-1'>s</div>
                              <p className='col-xl-10'>Chất Lượng đảm bảo</p>
                            </div>

                            <div className='row cs'>
                              <div className='col-xl-1'>s</div>
                              <p className='col-xl-10'>Hình chụp sản phẩm thật</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <BoundaryLine /> */}
                </div>

                {/*  */}
                <div className='more__information__detail'>
                  <div className='info-product-detail'>
                    <div className='info-content-detail'>
                      <h5><b>Thông tin sản phẩm:</b></h5>
                      <p>Sản phẩm  <b>{product.nameCard}</b> là loại sản phẩm đẹp mắt thời thượng với hai màu đen
                        và trắng. Thiết kế mới trên hình dạng cổ điển, có khả năng làm giảm bớt sự khó chịu khi sử dụng trong nhiều giờ </p>
                      <h5><b>Đặc điểm nổi bật:</b></h5>
                      <p>
                        Nâng tầm trải nghiệm âm và chất lượng cuộc gọi với chống ồn chủ động (ANC).
                        Kết nối không dây Bluetooth 5.0 dễ dàng với các thiết bị ngoài, đường truyền ổn định.
                        Chuẩn âm thanh studio với loa 2 chiều AKG mạnh mẽ.
                        Tận hưởng âm thanh vòm lôi cuốn, chuẩn điện ảnh từ 360 Audio.
                        Đàm thoại rõ ràng với hệ thống 3 mic và bộ phận thu nhận giọng nói (Voice Pickup Unit).
                        Loa 2 chiều (loa trầm 11mm, loa bổng 6.5mm).
                        Khả năng kháng nước hiệu quả cùng xếp hạng kháng nước IPX7.
                        Thời gian sử dụng 5 giờ và 13 giờ cùng hộp sạc (bật chống ồn), sử dụng 8 giờ và 20 giờ cùng hộp sạc (tắt chống ồn).
                      </p>

                      <div className='group__img__mortDetailInfo'>
                        <img src={product.imgCard} style={{ width: '32%' }} alt='' />
                        <img src={product.imgCard} style={{ width: '32%' }} alt='' />
                        <img src={product.imgCard} style={{ width: '32%' }} alt='' />
                      </div>
                    </div>

                    <div className='aa'>

                    </div>
                  </div>
                </div>
              </>
            )
        }
      </div>
    </div>
  )
}
