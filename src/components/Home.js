import React, { Component } from 'react';
import PostItem from './PostItem';
import dataJson from './data.json';

class Home extends Component {
    render() {
        return (
            <div>
                {/* <!-- Page Header--> */}
                <header className="masthead" style={{ backgroundImage: 'url("assets/img/home-bg.jpg")' }}>
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="site-heading">
                                    <h1>Clean Blog</h1>
                                    <span className="subheading">A Blog Theme by Start Bootstrap</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* <!-- Main Content--> */}
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            {/* Post preview*/}
                            {
                                dataJson.map((item, index) => {
                                    return (
                                        <PostItem key={index}
                                            itemId = {item.id}
                                            title={item.title}
                                            shortContent={item.shortContent}
                                            updateBy={item.updateBy}
                                            updateOn={item.updateOn} />
                                    )
                                })
                            }
                            {/* Pager*/}
                            <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;