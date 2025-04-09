import { Link } from "react-router-dom";
import { IMAGES } from "../assets";
export default function Home() {
    return (
        <>
            <header className="header-section">
                <div className="overlay">
                    <div className="container">
                        <div className="row d-flex header-area">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="#">
                                    <img src={IMAGES.logo} className="logo" alt="logo" />
                                </a>
                                <button
                                    className="navbar-toggler collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbar-content"
                                >
                                    <i className="fas fa-bars" />
                                </button>
                                <div
                                    className="collapse navbar-collapse justify-content-end"
                                    id="navbar-content"
                                >
                                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown main-navbar">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside"
                                            >
                                                Personal
                                            </a>
                                            <ul className="dropdown-menu main-menu shadow">
                                                <li>
                                                    <a className="nav-link" href="#">
                                                        Freelancer Payments
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="nav-link" href="#">
                                                        Subscriptions
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="nav-link" href="#">
                                                        Security
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="nav-link" href="#">
                                                        Fees
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown main-navbar">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside"
                                            >
                                                Business
                                            </a>
                                            <ul className="dropdown-menu main-menu shadow">
                                                <li>
                                                    <a className="nav-link" href="#">
                                                        Business Payments
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown main-navbar">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside"
                                            >
                                                Company
                                            </a>
                                            <ul className="dropdown-menu main-menu shadow">
                                                <li>
                                                    <a className="nav-link" href="#">
                                                        About Us
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="right-area header-action d-flex align-items-center max-un">
                                        <Link className="login" to={'/login'}>Login</Link>
                                        <Link className="cmn-btn" to={'/register'}>
                                            Sign Up
                                            <i className="icon-d-right-arrow-2" />
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <section className="banner-section index">
                <div className="overlay">
                    <div className="shape-area">
                        <img src={IMAGES.banner_box} className="obj-1" alt="image" />
                        <img src={IMAGES.banner_human} className="obj-2" alt="image" />
                        <img src={IMAGES.banner_rocket} className="obj-3" alt="image" />
                        <img src={IMAGES.banner_clock} className="obj-4" alt="image" />
                    </div>
                    <div className="banner-content">
                        <div className="container wow fadeInUp">
                            <div className="content-shape">
                                <img src={IMAGES.banner_wallet} className="obj-1" alt="image" />
                            </div>
                            <div className="row justify-content-between align-items-center">
                                <div className="col-lg-5 col-md-6">
                                    <div className="main-content">
                                        <div className="top-area section-text">
                                            <h5 className="sub-title">Trusted by over 3M customers</h5>
                                            <h1 className="title">Apps Scheduler</h1>
                                            <p className="xlr">
                                                Quickly and easily send, receive and request money online
                                                with Paylio. Get a customised solution to fit your business
                                                needs.
                                            </p>
                                        </div>
                                        <div className="bottom-area d-xxl-flex">
                                            <a href="#" className="cmn-btn">
                                                Open a Free Account
                                            </a>
                                            <a
                                                className="cmn-btn active mfp-iframe popupvideo"
                                                href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk"
                                            >
                                                See How it Works
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-5 col-md-6">
                                    <div className="send-money">
                                        <form action="#">
                                            <div className="currency-area">
                                                <div className="left-side">
                                                    <span className="mdr">You send</span>
                                                    <input
                                                        type="text"
                                                        className="xlr"
                                                        placeholder="Enter Amount"
                                                        defaultValue={1000}
                                                    />
                                                </div>
                                                <div className="right-side">
                                                    <select>
                                                        <option value={1}>USD</option>
                                                        <option value={2}>GBP</option>
                                                        <option value={3}>AUS</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="calculation">
                                                <div className="head-area">
                                                    <img src={IMAGES.ic_market} alt="image" />
                                                    <span className="mdr highlight">Show calculation</span>
                                                </div>
                                                <div className="calculation-details">
                                                    <div className="single-area d-flex align-items-center">
                                                        <div className="left-area">
                                                            <i className="fas fa-minus" />
                                                            <span className="mdr">10.04 USD</span>
                                                        </div>
                                                        <div className="right-area">
                                                            <span className="mdr">Our fee</span>
                                                        </div>
                                                    </div>
                                                    <div className="single-area d-flex align-items-center">
                                                        <div className="left-area">
                                                            <i className="fas fa-equals" />
                                                            <span className="mdr">989.96 USD</span>
                                                        </div>
                                                        <div className="right-area">
                                                            <span className="mdr">We’ll Convert</span>
                                                        </div>
                                                    </div>
                                                    <div className="single-area d-flex align-items-center">
                                                        <div className="left-area">
                                                            <i className="fas fa-times" />
                                                            <span className="mdr">1.3947</span>
                                                        </div>
                                                        <div className="right-area">
                                                            <span className="mdr highlight">Paylio Rate</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="currency-area">
                                                <div className="left-side">
                                                    <span className="mdr">Recipient gets</span>
                                                    <h5>1,380.69</h5>
                                                </div>
                                                <div className="right-side recipient">
                                                    <select>
                                                        <option value={1}>AUS</option>
                                                        <option value={2}>USD</option>
                                                        <option value={3}>GBP</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="btn-area mt-40">
                                                <a href="#" className="cmn-btn w-100">
                                                    Get Started
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counter-section">
                    <div className="container wow fadeInUp">
                        <div className="row cus-mar">
                            <div className="col-xl-3 col-md-3 col-sm-6">
                                <div className="single-area d-flex align-items-center justify-content-center">
                                    <div className="text-area text-center">
                                        <h2>
                                            <span className="counter">50</span>
                                            <span>+</span>
                                        </h2>
                                        <p>Supported Currencies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-3 col-sm-6">
                                <div className="single-area d-flex align-items-center justify-content-center">
                                    <div className="text-area text-center">
                                        <h2>
                                            <span className="counter">100</span>
                                            <span>+</span>
                                        </h2>
                                        <p>Available Countries</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-3 col-sm-6">
                                <div className="single-area d-flex align-items-center justify-content-center">
                                    <div className="text-area text-center">
                                        <h2>
                                            <span className="counter">70</span>
                                            <span>+</span>
                                        </h2>
                                        <p>Payment Methods</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-3 col-sm-6">
                                <div className="single-area d-flex align-items-center justify-content-center">
                                    <div className="text-area text-center">
                                        <h2>
                                            <span className="counter">7</span>
                                            <span>/</span>
                                            <span className="counter">24</span>
                                            <span>+</span>
                                        </h2>
                                        <p>Support Team</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="global-payment">
                <div className="overlay pt-120 pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-header text-center">
                                    <h5 className="sub-title">Send money in a heartbeat</h5>
                                    <h2 className="title">The World At Your Fingertips</h2>
                                    <p>
                                        Sign up to start saving on international money transfers and
                                        currency exchange.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-6 col-xl-5 order-xl-0 order-1">
                                <div className="image-area d-rtl left-side">
                                    <img
                                        src={IMAGES.global_payment}
                                        alt="images"
                                        className="max-un"
                                    />
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-7">
                                <div className="row cus-mar">
                                    <div className="col-sm-6 col-6">
                                        <div className="single-item">
                                            <img src={IMAGES.ic_global1} alt="icon" />
                                            <h5>Peace of Mind</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                posuere vel venenatis, eu sit massa. Volutpat massa rhoncus
                                                odio.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-6">
                                        <div className="single-item">
                                            <img src={IMAGES.ic_global2} alt="icon" />
                                            <h5>Business-Ready</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                posuere vel venenatis, eu sit massa. Volutpat massa rhoncus
                                                odio.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-6">
                                        <div className="single-item">
                                            <img src={IMAGES.ic_global3} alt="icon" />
                                            <h5>100% Transparent</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                posuere vel venenatis, eu sit massa. Volutpat massa rhoncus
                                                odio.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-6">
                                        <div className="single-item">
                                            <img src={IMAGES.ic_global4} alt="icon" />
                                            <h5>International Network</h5>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                posuere vel venenatis, eu sit massa. Volutpat massa rhoncus
                                                odio.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-solutions">
                <div className="overlay pt-120 pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-header dark-sec text-center">
                                    <h5 className="sub-title">High speeds. Low fees. No hassle.</h5>
                                    <h2 className="title">All Your Payments In One Place</h2>
                                    <p>
                                        Get used to low fees and great exchange rates on international
                                        money transfers.Expand your business worldwide
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row cus-mar">
                            <div className="col-xl-3 col-6">
                                <div className="single-item">
                                    <img src={IMAGES.ic_solution1} alt="icon" />
                                    <h5>Payments</h5>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-6">
                                <div className="single-item">
                                    <img src={IMAGES.ic_solution2} alt="icon" />
                                    <h5>Collections</h5>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-6">
                                <div className="single-item">
                                    <img src={IMAGES.ic_solution3} alt="icon" />
                                    <h5>Conversions</h5>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-6">
                                <div className="single-item">
                                    <img src={IMAGES.ic_solution4} alt="icon" />
                                    <h5>Global Account</h5>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="how-it-works">
                <div className="overlay pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-header text-center">
                                    <h5 className="sub-title">How it works?</h5>
                                    <h2 className="title">Just few steps to start</h2>
                                    <p>It's easier than you think. Follow 3 simple easy steps</p>
                                </div>
                            </div>
                        </div>
                        <div className="row cus-mar">
                            <div className="col-xl-3 col-sm-6 col-6">
                                <div className="single-item first text-center">
                                    <img src={IMAGES.ic_howworks1} alt="icon" />
                                    <h5>Register for free</h5>
                                    <p>Simply sign up online for free and verify your identity</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-6">
                                <div className="single-item second text-center">
                                    <img src={IMAGES.ic_howworks2} alt="icon" />
                                    <h5>Set up your transfer</h5>
                                    <p>Add a recipient's details and choose which currency ...</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-6">
                                <div className="single-item first text-center">
                                    <img src={IMAGES.ic_howworks3} alt="icon" />
                                    <h5>Make your payment</h5>
                                    <p>Send us your funds with a bank transfer and we'll notify..</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-6">
                                <div className="single-item text-center">
                                    <img src={IMAGES.ic_howworks4} alt="icon" />
                                    <h5>You're all done!</h5>
                                    <p>We inform you when the money has been sent and can also ...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="app-download">
                <div className="overlay pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6 order-lg-0 order-1">
                                <div className="image-area d-rtl left-side">
                                    <img
                                        src={IMAGES.app_download}
                                        alt="images"
                                        className="max-un"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="section-area">
                                    <h5 className="sub-title">App Download</h5>
                                    <h2 className="title">Fast, Secure Money Transfers</h2>
                                    <p>
                                        Access your account via your mobile phone. View balance,
                                        transfer funds, view transactions wherever you are.
                                    </p>
                                </div>
                                <ul className="features">
                                    <li>
                                        <img src={IMAGES.ic_check} alt="icon" />
                                        Login with fingerprint or Face ID.
                                    </li>
                                    <li>
                                        <img src={IMAGES.ic_check} alt="icon" />
                                        Simple few Taps to send money
                                    </li>
                                    <li>
                                        <img src={IMAGES.ic_check} alt="icon" />
                                        View transaction history.
                                    </li>
                                    <li>
                                        <img src={IMAGES.ic_check} alt="icon" />
                                        Get instant App notifications.
                                    </li>
                                </ul>
                                <div className="brand-area mt-40">
                                    <a href="#">
                                        <img src={IMAGES.google_play} alt="icon" />
                                    </a>
                                    <a href="#">
                                        <img src={IMAGES.apple_store} alt="icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-header text-center">
                                    <h5 className="sub-title">Testimonials</h5>
                                    <h2 className="title">What Our Customers Say</h2>
                                    <p>
                                        245m+ happy clients all around the world. Don’t just take our
                                        word for it
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid wow fadeInUp">
                        <div className="testimonials-carousel">
                            <div className="single-slide">
                                <div className="single-content">
                                    <div className="start-area">
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                    </div>
                                    <h5 className="title-area">Great Fast Reliable Service</h5>
                                    <p className="xlr">
                                        "Paylio has always been a reliable solution for my business. I
                                        am very satisfied with their speedy service and professional
                                        customer care. I highly recommend Paylio to businesses with
                                        regular overseas payments."
                                    </p>
                                    <div className="profile-area d-flex align-items-center">
                                        <div className="icon-area">
                                            <img src={IMAGES.avatar} alt="icon" />
                                        </div>
                                        <div className="text-area">
                                            <h5>Aspen Press</h5>
                                            <p>Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="single-content">
                                    <div className="start-area">
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                    </div>
                                    <h5 className="title-area">Great Fast Reliable Service</h5>
                                    <p className="xlr">
                                        "Paylio has always been a reliable solution for my business. I
                                        am very satisfied with their speedy service and professional
                                        customer care. I highly recommend Paylio to businesses with
                                        regular overseas payments."
                                    </p>
                                    <div className="profile-area d-flex align-items-center">
                                        <div className="icon-area">
                                            <img src={IMAGES.avatar} alt="icon" />
                                        </div>
                                        <div className="text-area">
                                            <h5>Courtney Henry</h5>
                                            <p>Balance Studio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="single-content">
                                    <div className="start-area">
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                    </div>
                                    <h5 className="title-area">Great Fast Reliable Service</h5>
                                    <p className="xlr">
                                        "Paylio has always been a reliable solution for my business. I
                                        am very satisfied with their speedy service and professional
                                        customer care. I highly recommend Paylio to businesses with
                                        regular overseas payments."
                                    </p>
                                    <div className="profile-area d-flex align-items-center">
                                        <div className="icon-area">
                                            <img src={IMAGES.avatar} alt="icon" />
                                        </div>
                                        <div className="text-area">
                                            <h5>Paul Howell</h5>
                                            <p>President of Sales</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="single-content">
                                    <div className="start-area">
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-star" />
                                        </a>
                                    </div>
                                    <h5 className="title-area">Great Fast Reliable Service</h5>
                                    <p className="xlr">
                                        "Paylio has always been a reliable solution for my business. I
                                        am very satisfied with their speedy service and professional
                                        customer care. I highly recommend Paylio to businesses with
                                        regular overseas payments."
                                    </p>
                                    <div className="profile-area d-flex align-items-center">
                                        <div className="icon-area">
                                            <img src={IMAGES.avatar} alt="icon" />
                                        </div>
                                        <div className="text-area">
                                            <h5>Courtney Henry</h5>
                                            <p>Balance Studio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faqs-section">
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-7">
                                <div className="section-header text-center">
                                    <h5 className="sub-title">Frequently Asked Questions</h5>
                                    <h2 className="title">If you got questions we have answer</h2>
                                    <p>We have a list of frequently asked questions about us</p>
                                </div>
                            </div>
                        </div>
                        <div className="row cus-mar">
                            <div className="col-lg-6">
                                <div className="accordion" id="accordionLeft">
                                    <div className="accordion-item">
                                        <h6 className="accordion-header" id="headingLeftOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseLeftOne"
                                                aria-expanded="false"
                                                aria-controls="collapseLeftOne"
                                            >
                                                How to send money online?
                                            </button>
                                        </h6>
                                        <div
                                            id="collapseLeftOne"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingLeftOne"
                                            data-bs-parent="#accordionLeft"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                    posuere vel venenatis, eu sit massa. Volutpat massa
                                                    rhoncus odio feugiat tellus elit massa sed ullamcorper a
                                                    in.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h6 className="accordion-header" id="headingLeftTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseLeftTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseLeftTwo"
                                            >
                                                How much are money transfer fees?
                                            </button>
                                        </h6>
                                        <div
                                            id="collapseLeftTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingLeftTwo"
                                            data-bs-parent="#accordionLeft"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                    posuere vel venenatis, eu sit massa. Volutpat massa
                                                    rhoncus odio feugiat tellus elit massa sed ullamcorper a
                                                    in.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h6 className="accordion-header" id="headingLeftThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseLeftThree"
                                                aria-expanded="false"
                                                aria-controls="collapseLeftThree"
                                            >
                                                What is the fastest way to send money abroad?
                                            </button>
                                        </h6>
                                        <div
                                            id="collapseLeftThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingLeftThree"
                                            data-bs-parent="#accordionLeft"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                    posuere vel venenatis, eu sit massa. Volutpat massa
                                                    rhoncus odio feugiat tellus elit massa sed ullamcorper a
                                                    in.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h6 className="accordion-header" id="headingLeftFour">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseLeftFour"
                                                aria-expanded="false"
                                                aria-controls="collapseLeftFour"
                                            >
                                                How to use Paylio?
                                            </button>
                                        </h6>
                                        <div
                                            id="collapseLeftFour"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingLeftFour"
                                            data-bs-parent="#accordionLeft"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                    posuere vel venenatis, eu sit massa. Volutpat massa
                                                    rhoncus odio feugiat tellus elit massa sed ullamcorper a
                                                    in.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h6 className="accordion-header" id="headingLeftFive">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseLeftFive"
                                                aria-expanded="false"
                                                aria-controls="collapseLeftFive"
                                            >
                                                How does Paylio protect your money?
                                            </button>
                                        </h6>
                                        <div
                                            id="collapseLeftFive"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingLeftFive"
                                            data-bs-parent="#accordionLeft"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                    posuere vel venenatis, eu sit massa. Volutpat massa
                                                    rhoncus odio feugiat tellus elit massa sed ullamcorper a
                                                    in.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="accordion" id="accordionRight">
                                    <div className="accordion-item">
                                        <h6 className="accordion-header" id="headingRightOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseRightOne"
                                                aria-expanded="false"
                                                aria-controls="collapseRightOne"
                                            >
                                                Are money transfer apps safe?
                                            </button>
                                        </h6>
                                        <div
                                            id="collapseRightOne"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingRightOne"
                                            data-bs-parent="#accordionRight"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                    posuere vel venenatis, eu sit massa. Volutpat massa
                                                    rhoncus odio feugiat tellus elit massa sed ullamcorper a
                                                    in.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h6 className="accordion-header" id="headingRightTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseRightTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseRightTwo"
                                            >
                                                How much money can I send?
                                            </button>
                                        </h6>
                                        <div
                                            id="collapseRightTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingRightTwo"
                                            data-bs-parent="#accordionRight"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                    posuere vel venenatis, eu sit massa. Volutpat massa
                                                    rhoncus odio feugiat tellus elit massa sed ullamcorper a
                                                    in.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h6 className="accordion-header" id="headingRightThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseRightThree"
                                                aria-expanded="false"
                                                aria-controls="collapseRightThree"
                                            >
                                                Which currency can I send?
                                            </button>
                                        </h6>
                                        <div
                                            id="collapseRightThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingRightThree"
                                            data-bs-parent="#accordionRight"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                    posuere vel venenatis, eu sit massa. Volutpat massa
                                                    rhoncus odio feugiat tellus elit massa sed ullamcorper a
                                                    in.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h6 className="accordion-header" id="headingRightFour">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseRightFour"
                                                aria-expanded="false"
                                                aria-controls="collapseRightFour"
                                            >
                                                Cancel transaction
                                            </button>
                                        </h6>
                                        <div
                                            id="collapseRightFour"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingRightFour"
                                            data-bs-parent="#accordionRight"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                    posuere vel venenatis, eu sit massa. Volutpat massa
                                                    rhoncus odio feugiat tellus elit massa sed ullamcorper a
                                                    in.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h6 className="accordion-header" id="headingRightFive">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseRightFive"
                                                aria-expanded="false"
                                                aria-controls="collapseRightFive"
                                            >
                                                Can I send multiple payments?
                                            </button>
                                        </h6>
                                        <div
                                            id="collapseRightFive"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingRightFive"
                                            data-bs-parent="#accordionRight"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                    posuere vel venenatis, eu sit massa. Volutpat massa
                                                    rhoncus odio feugiat tellus elit massa sed ullamcorper a
                                                    in.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="newsletter">
                                <div className="section-area mb-30 dark-sec text-center">
                                    <h3 className="title">Subscribe to Our Newsletter</h3>
                                </div>
                                <form action="#">
                                    <div className="form-group d-flex align-items-center">
                                        <input type="text" placeholder="Your Email Address" />
                                        <button>
                                            <img src={IMAGES.ic_arrow_right2} alt="icon" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-area pt-120">
                        <div className="footer-top">
                            <div className="row align-items-center">
                                <div className="col-sm-6 d-flex justify-content-center justify-content-sm-start">
                                    <div className="menu-item">
                                        <ul className="footer-link d-flex align-items-center">
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Support</a>
                                            </li>
                                            <li>
                                                <a href="#">Fees</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="social-link d-flex justify-content-sm-end justify-content-center align-items-center">
                                        <a href="#">
                                            <img src={IMAGES.ic_facebook} alt="icon" />
                                        </a>
                                        <a href="#">
                                            <img src={IMAGES.ic_linkedin} alt="icon" />
                                        </a>
                                        <a href="#">
                                            <img src={IMAGES.ic_instagram} alt="icon" />
                                        </a>
                                        <a href="#">
                                            <img src={IMAGES.ic_twitter} alt="icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-md-6 col-sm-8 d-flex justify-content-center justify-content-sm-start order-sm-0 order-1">
                                    <div className="copyright text-center text-sm-start">
                                        <p>
                                            {" "}
                                            Copyright © 2022 <a href="#">Paylio.</a> All Rights
                                            Reserved.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-4">
                                    <div className="menu-item">
                                        <ul className="footer-link d-flex justify-content-sm-end justify-content-center align-items-center">
                                            <li>
                                                <a href="#">Terms</a>
                                            </li>
                                            <li>
                                                <a href="#">Privacy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}