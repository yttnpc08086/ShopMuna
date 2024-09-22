import React from 'react';
import { Link } from 'react-router-dom';
import IMAGES_CLEINT from '../../../assets/client/images/404.png';

const PageNotFound = () => {
    return (
        <div className="d-flex bonkhongbon pt-5 align-items-center justify-content-center vh-100">
        <section className="py-5 w-50">
            <div className="container pt-5 d-flex justify-content-center">
                <div className="text-center">
                    <img
                        loading="lazy"
                        decoding="async"
                        src={IMAGES_CLEINT}
                        alt="404"
                        className="img-fluid mb-4"
                        width="300"
                        height="200"
                    />
                    <h1 className="display-4 mb-3">Page Not Found!</h1>
                    <p className="lead mb-4">Sorry, the page you are looking for does not exist.</p>
                    <Link to="/" className="btn btn-primary btn-lg">
                        Back to Home Page
                    </Link>
                </div>
            </div>
        </section>
    </div>
    
    );
};

export default PageNotFound;
