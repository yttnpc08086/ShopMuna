import React from 'react';

const login = () => {
    return (
        <div class="container-fluid">
            <div class="card text-black m-5" style="border-radius: 25px;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-10 col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center">

                            <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-user me-3 fa-lg"></i>
                                <input class="form-control w-100" type="text" id="form1" placeholder="Your Name" />
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-envelope me-3 fa-lg"></i>
                                <input class="form-control" type="email" id="form2" placeholder="Your Email" />
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-lock me-3 fa-lg"></i>
                                <input class="form-control" type="password" id="form3" placeholder="Password" />
                            </div>

                            <div class="d-flex flex-row align-items-center mb-4">
                                <i class="fas fa-key me-3 fa-lg"></i>
                                <input class="form-control" type="password" id="form4" placeholder="Repeat your password" />
                            </div>

                            <div class="mb-4">
                                <input class="form-check-input" type="checkbox" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Subscribe to our newsletter</label>
                            </div>

                            <button class="btn btn-primary mb-4 btn-lg">Register</button>

                        </div>

                        <div class="col-md-10 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" class="img-fluid" alt="Sample image" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
};

export default login;
