import React, { useState } from 'react';

export default function Header(props) {

    return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i class="fas fa-bars"></i>
            </button>
            <a class="navbar-brand" href="#!">E-Books</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#!">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#!">Link</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    );


}

