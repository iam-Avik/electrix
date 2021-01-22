import React, { Component } from 'react';

class Card2 extends Component {
    render() {
        return (
            <div>
                <div className="container-top1">
                    <p id="left-side1">Top selling products</p>
                    <p id="right-side1"> more</p>
                </div>
                <div className="container1">
                    <div className="item1" id="item-1">
                        <div className="gridcontainer1">
                            <div className="grid-item1"><img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" /></div>
                            <div className="grid-item1"><img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" /></div>
                            <div className="grid-item1"><img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" /></div>
                            <div className="grid-item1"><img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" /></div>
                        </div>

                    </div>
                    <div className="item1" id="item-1">
                        <div className="gridcontainer1">
                            <div className="grid-item1"> <img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" /></div>
                            <div className="grid-item1"> <img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" /></div>
                            <div className="grid-item1"> <img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" /></div>
                            <div className="grid-item1"> <img src={process.env.PUBLIC_URL + "/asset/Rectangle 34.png"} alt="there is an image" /></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Card2;
