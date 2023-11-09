import React from "react";

function Main() {
    return (
        <div>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" href="www.google.com.au">Active</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="google.com.au">Dropdown</a>
                    <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="www.google.com.au">Link 1</a></li>
                    <li><a class="dropdown-item" href="google.com.au">Link 2</a></li>
                    <li><a class="dropdown-item" href="google.com.au">Link 3</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="google.com.au">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="google.com.au">Disabled</a>
                </li>
            </ul>
        </div>
    )
}

export default Main;