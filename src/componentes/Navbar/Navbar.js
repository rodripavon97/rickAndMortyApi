export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand navbar-dark" style={{backgroundColor:"#CDDAD1"}}>
    <a class="navbar-brand" style={{color: "#3F8088"}}>Rick And Morty Api</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample02">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" style={{color: "#3F8088"}}>Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color: "#3F8088"}}>Proximamente</a>
        </li>
      </ul>
    </div>
  </nav>
  );
};
