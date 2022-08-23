import React from 'react';
import './Shop.css';
import Activewear from '../../assets/images/activewear.jpg';
import Co_ords from '../../assets/images/Co_ords.jpg';
import Coats_jakets from '../../assets/images/Coats_jakets.jpg';
import Dresses from '../../assets/images/Dresses.jpg';
import Hoodies_Sweatshirts from '../../assets/images/Hoodies_&_Sweatshirts.jpg';
import Jeans from '../../assets/images/Jeans.jpg';
import Skirts_Tops from '../../assets/images/Skirts_&_Tops.jpg';
import Jumpsuits_Playsuits from '../../assets/images/Jumpsuits_&_Playsuits.jpg';
import Lingeries from '../../assets/images/Lingeries.jpg';
import Bikinis_Swimsuits from '../../assets/images/Bikinis_&_Swimsuits.jpg';

const color = ["red", "yellow", "blue", "pink", "red", "violet", "black", "red", "blue"];
const size = ["XS", "S", "M", "L", "XL", "2X", "SX"];

export default function BodyShop() {
  return (
    <div className="body__shop__page">
      {/* <h1>Top Category</h1> */}
      <div className='wrap__top__category'>
        <div className='item__category'>
          <p><img src={Activewear} alt='' /></p>
          <p className='title_item_category'>Activewear</p>
        </div>
        <div className='item__category'>
          <p><img src={Co_ords} alt='' /></p>
          <p className='title_item_category'>Co-ords</p>
        </div>
        <div className='item__category'>
          <p><img src={Coats_jakets} alt='' /></p>
          <p className='title_item_category'>Coats</p>
        </div>
        <div className='item__category'>
          <p><img src={Dresses} alt='' /></p>
          <p className='title_item_category'>Dresses</p>
        </div>
        <div className='item__category'>
          <p><img src={Hoodies_Sweatshirts} alt='' /></p>
          <p className='title_item_category'>Hoodies & Sweatshirts</p>
        </div>
        <div className='item__category'>
          <p><img src={Jeans} alt='' /></p>
          <p className='title_item_category'>Jeans</p>
        </div>
        <div className='item__category'>
          <p><img src={Skirts_Tops} alt='' /></p>
          <p className='title_item_category'>Skirts & Tops</p>
        </div>
        <div className='item__category'>
          <p><img src={Jumpsuits_Playsuits} alt='' /></p>
          <p className='title_item_category'>Jumpsuits & Playsuits</p>
        </div>
        <div className='item__category'>
          <p><img src={Lingeries} alt='' /></p>
          <p className='title_item_category'>Lingeries</p>
        </div>
        <div className='item__category'>
          <p><img src={Bikinis_Swimsuits} alt='' /></p>
          <p className='title_item_category'>Bikinis & Swimsuits</p>
        </div>

      </div>

      <div className="content__body__shop">
        <div style={{ background: '', width: '22%' }}>
          <h1 style={{ fontSize: '15px' }}>CATEGORIES</h1>
          <p style={{ width: '95%', height: '1px', background: '#E6E6E6' }}></p>

          {/* COLOR */}
          <p>COLOR</p>
          <p style={{ width: '95%', height: '1px', background: '#E6E6E6' }}></p>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
              color.map((color) => (
                <p style={{ width: "35px", height: '35px', background: `${color}`, borderRadius: '50%', marginRight: '5px' }}></p>
              ))
            }
          </div>

          {/* SIZE */}
          <p>SIZE</p>
          <p style={{ width: '95%', height: '1px', background: '#E6E6E6' }}></p>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
              size.map((size) => (
                <div style={{ width: "15%", height: "34px", marginRight: '10px', marginTop: "10px", border: "1px solid #E6E6E6" }}><p>{size}</p></div>
              ))
            }
          </div>

          {/* PRICE */}
          <p style={{ marginTop: "20px" }}>PRICE</p>

          {/* BRAND */}


        </div>

        <p style={{ width: '14px' }}></p>
        {/* product */}
        <div style={{ flex: "3" }}>
          <div className='card__content'>
            <div className="card">
              <img style={{ height: '230px' }} src="https://cf.shopee.vn/file/2a6006c701cbd92c47041b105386814a_tn" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build</p>
              </div>
            </div>

            <div className="card">
              <img style={{ height: '230px' }} src="https://cf.shopee.vn/file/2a6006c701cbd92c47041b105386814a_tn" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build</p>
              </div>
            </div>

            <div className="card">
              <img style={{ height: '230px' }} src="https://cf.shopee.vn/file/2a6006c701cbd92c47041b105386814a_tn" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build</p>
              </div>
            </div>

            <div className="card">
              <img style={{ height: '230px' }} src="https://cf.shopee.vn/file/2a6006c701cbd92c47041b105386814a_tn" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build</p>
              </div>
            </div>

            <div className="card">
              <img style={{ height: '230px' }} src="https://cf.shopee.vn/file/2a6006c701cbd92c47041b105386814a_tn" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build</p>
              </div>
            </div>

            <div className="card">
              <img style={{ height: '230px' }} src="https://cf.shopee.vn/file/2a6006c701cbd92c47041b105386814a_tn" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build</p>
              </div>
            </div>

            <div className="card">
              <img style={{ height: '230px' }} src="https://cf.shopee.vn/file/2a6006c701cbd92c47041b105386814a_tn" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build</p>
              </div>
            </div>

            <div className="card">
              <img style={{ height: '230px' }} src="https://cf.shopee.vn/file/2a6006c701cbd92c47041b105386814a_tn" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
