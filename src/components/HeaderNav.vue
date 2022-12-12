<template>
    <header class="d-flex align-items-center">
        <nav class="container-fluid p-1">
            <div class="mobile-menu">
                <ul class="d-flex align-items-center justify-content-around m-auto p-0">
                    <li class="mx-2">
                        <router-link to="/">
                            <i class="fa-solid fa-house"></i>
                        </router-link>
                    </li>
                    <li class="mx-2">
                        <router-link to="/skills">
                            <i class="fa-solid fa-clipboard-check"></i>
                        </router-link>
                    </li>
                    <li class="mx-2">
                        <router-link to="/portfolio">
                            <i class="fa-solid fa-box-archive"></i>
                        </router-link>
                    </li>
                    <li class="mx-2">
                        <router-link to="/contact">
                            <i class="fa-solid fa-user"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="menu">
                <ul class="d-flex align-items-center m-auto justify-content-around p-0">
                    <li class="m-2">
                        <router-link to="/">Accueil</router-link>
                    </li>
                    <li class="m-2">
                        <router-link to="/skills">Compétences</router-link>
                    </li>
                    <li class="m-2">
                        <router-link to="/portfolio">Portfolio</router-link>
                    </li>
                    <li class="m-2">
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>