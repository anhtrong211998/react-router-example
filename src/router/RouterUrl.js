import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Post from '../components/Post';
import Footer from '../shared/Footer';
import NavBar from '../shared/NavBar';

class RouterUrl extends Component {
    render() {
        return (
            <Router>
                {/* <!-- Navigation--> */}

                <div>
                    <NavBar />

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<AboutMe />} />
                        <Route path="post/:slug.:id.html" element={<Post />} />
                        <Route path="contact" element={<Contact />} />
                    </Routes>

                    <Footer />
                </div>
            </Router>
        );
    }
}

export default RouterUrl;