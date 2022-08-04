/* import library */
import { useState } from 'react';
import Alert from '@mui/material/Alert';
/* icon */
import { FiPhone } from "react-icons/fi";
import '../home/Home.css';
import NestedList from '../NestedList'; 
/* import components */


export default function HeaderHome() {

    /* Xử lý show List Card */
    const [showList, setShowList] = useState(true);
    const [classList, setclassList] = useState("list-group-item list-group-item-action");

    const handleClickShowList = () => {
        setShowList(!showList)
        if (showList === true) {
            setclassList("list-group-item list-group-item-action")
        } else {
            setclassList("hideClassList")
        }
    }


    return (
        <div className="header-home-page">
            {/* List product type */}
            <div className="box-list-product-header-home">
                <NestedList />

                <div className="box-carosel-header-home">
                    <div className="row">
                        <Alert className='cc' severity="success" color="info">
                            This is a success alert — check it out!
                        </Alert>


                        <div style={{ textAlign: "right" }} className="col-xl-3">
                            <div className='row'>
                                <b style={{ borderRadius: "50%", background: "rgb(144, 196, 60)", height: "50px", width: "50px", textAlign: "center", lineHeight: "50px", color: '#fff' }} className='col-xl-1'>
                                    <FiPhone />
                                </b>
                                <div className='col'>
                                    <p> <b>+65 11.188.888 </b> <br />
                                        <a href='/' style={{ fontSize: "14px" }}>support 24/7 time</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carosel-main-header-home">

                    </div>
                </div>
            </div>

            <div className="box-list-item-header-home">
                <p className="item-header-home1"></p>
                <p className="item-header-home2"></p>
                <p className="item-header-home3"></p>
            </div>
        </div>
    );
}
