import React from 'react';

const AuthPage = () => {
    return (
        <div className='row'>
            <div className="col s6 offset-s3">
                <h1>Reduce Links!</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        
                        <div>
                            <div className="input-field">
                                <input
                                    className="yellow-input"
                                    placeholder="Enter email..."
                                    id="email"
                                    type="text"
                                    name='email'
                                />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="input-field">
                                <input
                                    className="yellow-input"
                                    placeholder="Enter password..."
                                    id="password"
                                    type="password"
                                    name='password'
                                />
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                    </div>

                    <div className="card-action">
                        <button
                            className='btn yellow darken-4'
                            style={{ marginRight: "1rem" }}
                        >
                            Sign in
                        </button>

                        <button className='btn grey lighten-1 black-text'>
                            Registration
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;