<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>

    <!--- Los enlaces en lugar de ponerlos como '<a href="...">Texto</a>', ponerlos así:
          <RouterLink to='/direccion'>Texto </RouterLink> como en el ejemplo.
            Para ver todas las direcciones disponibles, revisar el archivo router/router.js donde dice 'path'
        -->

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">Navbar</RouterLink> 
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/login">Login</RouterLink> 
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/mesas">Mesas</RouterLink> 
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link " to="/menu">Menú</RouterLink> 
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/pedidos">Pedidos</RouterLink> 
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/informes">Informes</RouterLink> 
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/usuarios">Usuarios</RouterLink> 
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-secondary">Logout</button>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>


</template>