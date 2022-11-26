import { data } from "autoprefixer";

export const CardPersonaje = (dataPersonaje) => {
  return (
    <>
      <img
        className="mx-auto d-block"
        src={dataPersonaje.image}
        style={{ borderRadius: "50%", width: "100px", height: "100px" }}
        class="card-img-top"
        alt="..."
      />
      <h3 className="card-title" style={{color:" #373027"}}>{dataPersonaje.name}</h3>
      <span className="card-title" style={{color:" #373027"}}> {dataPersonaje.species}</span>
      <p className="card-text" style={{color:"#373027"}}>
        {dataPersonaje.status}
      </p>
    </>
  );
};
