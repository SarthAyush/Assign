import React from 'react'
import { Link } from 'react-router-dom'
import { CURRENT_USER_TYPE } from '../App'
function Navbar() {
    return (
        <><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <Link class="navbar-brand">
                            <img src="https://e7.pngegg.com/pngimages/359/743/png-clipart-logo-community-text-logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                            RBAC
                        </Link>
                    </div>
                </nav>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link class="nav-link" to="/user">User</Link>
                        <Link class="nav-link" to="/userprofile">My Profile</Link>
                        <Link class="nav-link" to="/admin">Admin</Link>
                        <Link class="nav-link disabled">You Are logged in as : {CURRENT_USER_TYPE}</Link>


                    </div>
                </div>

            </div>
        </nav>

        </>
    )
}
export default Navbar