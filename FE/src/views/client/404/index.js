import React from 'react';
import { Link } from 'react-router-dom';
import IMAGES_CLEINT from '../../../assets/client/images/404.png';

const PageNotFound = () => {
    return (
        <main className="d-flex align-items-center min-vh-100 bg-light">
            <section className="py-5 w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7  text-center">
                            <img
                                loading="lazy"
                                decoding="async"
                                src={IMAGES_CLEINT}
                                alt="404"
                                className="img-fluid mb-4"
                                width="500"
                                height="350"
                            />
                            <h1 className="display-4 mb-3">Page Not Found!</h1>
                            <p className="lead mb-4">Sorry, the page you are looking for does not exist.</p>
                            <Link to="/" className="btn btn-primary btn-lg">
                                Back to Home Page
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PageNotFound;
