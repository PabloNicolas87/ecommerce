import './navbar.css'

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        <div class="container-fluid d-flex justify-content-between">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex my-3 col-12 col-lg-6
          " role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul class="col-12 col-lg-6 navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-center justify-content-lg-end">
              <li class="nav-item px-2">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item px-2">
                <a class="nav-link" href="#">Link</a>
              </li>
            </ul>
            
          </div>
        </div>
    </nav>
    )
}

export default Navbar