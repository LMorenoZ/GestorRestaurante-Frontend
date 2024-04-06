<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between " id="navbarSupportedContent">
        <div class= "col-11 d-flex justify-content-center">
          <ul class="navbar-nav mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Menu 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Menu 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Menu 3</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Menu 4</a>
            </li>
          </ul>
        </div>
        <div class="col-1 d-flex justify-content-end">
          <a class="navbar-brand" href="#">
            <img src="" alt="Foto de perfil" width="24" height="24">
          </a>
        </div>
      </div>
    </div>
  </nav>

<form action="" method="post" enctype="multipart/form-data" >
  <div class="container mt-4 ">
    <div class="row">
      <div class="col">
        <div class="col-12 text-left">
          <h3>Crear usuario </h3>
        </div>
        <div container text-center>

          <div class="row pt-4 pb-4">
            <label for="campoNombre" class="col-sm-2 col-form-label col-form-label-lg">Nombres: </label>
            <div class="col-sm-10">
              <input type="text" class="form-control form-control-lg" id="campoNombre" placeholder="">
            </div>
          </div>

          <div class="row pt-4 pb-4">
            <label for="campoApellido" class="col-sm-2 col-form-label col-form-label-lg">Apellidos: </label>
            <div class="col-sm-10">
              <input type="text" class="form-control form-control-lg" id="campoApellido" placeholder="">
            </div>
          </div>

          <div class="row pt-4 pb-4">
            <label for="campoRol" class="col-sm-2 col-form-label col-form-label-lg">Rol: </label>
            <div class="col-sm-10">
              <select class="form-select form-select-lg mb-3" aria-label="Large select example"> 
                <option selected disabled></option>
                <option value="1">Mesero</option>
                <option value="2">Caja</option>
              </select>
              
            </div>
          </div>

          <div class="row pt-4 pb-4">
            <label for="campoUsuario" class="col-sm-2 col-form-label col-form-label-lg">Usuario: </label>
            <div class="col-sm-10">
              <input type="text" class="form-control form-control-lg" id="campoUsuario" placeholder="">
            </div>
          </div>

          <div class="row pt-4 pb-4">
            <label for="campoContrasenia" class="col-sm-2 col-form-label col-form-label-lg">Contraseña: </label>
            <div class="col-sm-10">
              <input type="password" class="form-control form-control-lg" id="campoContrasenia" placeholder="">
            </div>
          </div>

        </div>
      </div>
      <div class="col text-center">

            <div class="m-auto col-7">
                <img src="" alt="avatar" id="imgPreview" width="300px"/>

                <div class="mb-3">
                  <label for="campoFoto" class="form-label">Imagen</label>
                  <input class="form-control" type="file" id="campoFoto" accept="image" onchange="previewImage(event, '#imgPreview')">
                </div>                 
            </div>      
        
      </div>
    </div>
    <div class="row">
      <div class="col">
      </div>
      <div class="col text-center">
        <button type="submit" class="btn btn-outline-success btn-lg">Crear Usuario</button>
      </div>
      <div class="col">
      </div>
    </div>
  </div>
</form>

</template>