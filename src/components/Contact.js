import React, { Component, isValidElement } from 'react';
import { useNavigate, Navigate } from "react-router-dom";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
            fName: "",
            fEmail: "",
            fPhone: "",
            fMessage: "",
            fDate: "",
            fAvatar: ""
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true,
        })
    }

    isChange = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    isFileChange = (event) =>{
        let nameFile = event.target.files[0].name;
        this.setState({
            fAvatar: "/assets/img/" + nameFile
        });
    }

    render() {
        if (this.state.isRedirect) {
            console.log(this.state);
            return (
                <Navigate to="/" />
            );
        }
        return (
            <div>
                {/* Page Header*/}
                <header className="masthead" style={{ backgroundImage: 'url("assets/img/contact-bg.jpg")' }}>
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="page-heading">
                                    <h1>Contact Me</h1>
                                    <span className="subheading">Have questions? I have answers.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content*/}
                <main className="mb-4">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                                <div className="my-5">
                                    {/* * * * * * * * * * * * * * * **/}
                                    {/* * * SB Forms Contact Form * **/}
                                    {/* * * * * * * * * * * * * * * **/}
                                    {/* This form is pre-integrated with SB Forms.*/}
                                    {/* To make this form functional, sign up at*/}
                                    {/* https://startbootstrap.com/solution/contact-forms*/}
                                    {/* to get an API token!*/}


                                    <form name="sentMessage" id="contactForm" noValidate
                                        onSubmit={(event) => this.submitForm(event)}>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls">
                                                <label>Name</label>
                                                <input type="text" className="form-control" placeholder="Name" id="name"
                                                    required data-validation-required-message="Please enter your name."
                                                    onChange={(event) => this.isChange(event)} name="fName" />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls">
                                                <label>Email Address</label>
                                                <input type="email" className="form-control" placeholder="Email Address"
                                                    id="email" onChange={(event) => this.isChange(event)} name="fEmail"
                                                    required data-validation-required-message="Please enter your email address." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                                <label>Phone Number</label>
                                                <input type="tel" className="form-control"
                                                    placeholder="Phone Number" id="phone" name='fPhone' onChange={(event) => this.isChange(event)}
                                                    required data-validation-required-message="Please enter your phone number." />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls">
                                                <label>Message</label>
                                                <textarea rows={5} className="form-control"
                                                    placeholder="Message" id="message" name='fMessage' onChange={(event) => this.isChange(event)}
                                                    required data-validation-required-message="Please enter a message." defaultValue={""} />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>

                                        <div className="control-group">
                                            <div className="form-group floating-label-form-group controls">
                                                <label>Date</label>
                                                <select className='form-control' name='fDate' id='selectDate' placeholder='Date'
                                                    onChange={(event) => this.isChange(event)} required data-validation-required-message="Please select a date.">
                                                    <option value="">--select date--</option>
                                                    <option value="thu3">Ngày thứ 3</option>
                                                    <option value="thu5">Ngày thứ 5</option>
                                                    <option value="thu6">Ngày thứ 6</option>
                                                    <option value="chunhat">Ngày chủ nhật</option>
                                                </select>
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>

                                        <div className="control-group">
                                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                                <label>Avatar</label>
                                                <input type="file" className="form-control"
                                                    placeholder="Avatar" id="phone" name='fPhone' 
                                                    onChange={(event) => this.isFileChange(event)}/>
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <br />
                                        <div id="success" />
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default Contact;

// export default function Contact() {
//     let navigate = useNavigate();
//     const submitForm = (event) => {
//         event.preventDefault();
//         // this.setState({
//         //     isRedirect: true
//         // });
//         navigate("/", { replace: true });
//     }

//     return (
//         <div>
//             {/* Page Header*/}
//             <header className="masthead" style={{ backgroundImage: 'url("assets/img/contact-bg.jpg")' }}>
//                 <div className="container position-relative px-4 px-lg-5">
//                     <div className="row gx-4 gx-lg-5 justify-content-center">
//                         <div className="col-md-10 col-lg-8 col-xl-7">
//                             <div className="page-heading">
//                                 <h1>Contact Me</h1>
//                                 <span className="subheading">Have questions? I have answers.</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Main Content*/}
//             <main className="mb-4">
//                 <div className="container px-4 px-lg-5">
//                     <div className="row gx-4 gx-lg-5 justify-content-center">
//                         <div className="col-md-10 col-lg-8 col-xl-7">
//                             <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
//                             <div className="my-5">
//                                 {/* * * * * * * * * * * * * * * **/}
//                                 {/* * * SB Forms Contact Form * **/}
//                                 {/* * * * * * * * * * * * * * * **/}
//                                 {/* This form is pre-integrated with SB Forms.*/}
//                                 {/* To make this form functional, sign up at*/}
//                                 {/* https://startbootstrap.com/solution/contact-forms*/}
//                                 {/* to get an API token!*/}
//                                 <form id="contactForm">
//                                     <div className="form-floating">
//                                         <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
//                                         <label htmlFor="name">Name</label>
//                                         <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
//                                     </div>
//                                     <div className="form-floating">
//                                         <input className="form-control" id="email" type="email" placeholder="Enter your email..." data-sb-validations="required,email" />
//                                         <label htmlFor="email">Email address</label>
//                                         <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
//                                         <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
//                                     </div>
//                                     <div className="form-floating">
//                                         <input className="form-control" id="phone" type="tel" placeholder="Enter your phone number..." data-sb-validations="required" />
//                                         <label htmlFor="phone">Phone Number</label>
//                                         <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
//                                     </div>
//                                     <div className="form-floating">
//                                         <textarea className="form-control" id="message" placeholder="Enter your message here..." style={{ height: '12rem' }} data-sb-validations="required" defaultValue={""} />
//                                         <label htmlFor="message">Message</label>
//                                         <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
//                                     </div>
//                                     <br />
//                                     {/* Submit success message*/}
//                                     {/**/}
//                                     {/* This is what your users will see when the form*/}
//                                     {/* has successfully submitted*/}
//                                     <div className="d-none" id="submitSuccessMessage">
//                                         <div className="text-center mb-3">
//                                             <div className="fw-bolder">Form submission successful!</div>
//                                             To activate this form, sign up at
//                                             <br />
//                                             <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
//                                         </div>
//                                     </div>
//                                     {/* Submit error message*/}
//                                     {/**/}
//                                     {/* This is what your users will see when there is*/}
//                                     {/* an error submitting the form*/}
//                                     <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
//                                     {/* Submit Button*/}
//                                     <button className="btn btn-primary text-uppercase"
//                                         id="submitButton"
//                                         type="submit"
//                                         onClick={(event) => submitForm(event)}>
//                                         Send
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }