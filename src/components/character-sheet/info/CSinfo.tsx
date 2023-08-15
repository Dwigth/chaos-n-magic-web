// import React from "react";

export default function CSinfo() {
  return (
    <div>
      <label htmlFor="">Nombre</label>
      <input type="text" placeholder="Nombre del personaje" name="info-name" />

      <label htmlFor="">Especie</label>
      <input
        type="text"
        placeholder="Especie del personaje"
        name="info-specie"
      />

      <label htmlFor="">Dieta</label>
      <input type="text" placeholder="Dieta del personaje" name="info-diet" />

      <label htmlFor="">Profesión</label>
      <input
        type="text"
        placeholder="Profesión del personaje"
        name="info-profesion"
      />

      <label htmlFor="">Idioma</label>
      <input
        type="text"
        placeholder="Idiomas del personaje"
        name="info-language"
      />

      <label htmlFor="">Velocidad al correr</label>
      <input type="number" name="info-velocity-run" />

      <label htmlFor="">Velocidad de nado</label>
      <input type="number" name="info-velocity-swimming" />

      <label htmlFor="">Velocidad de escalado</label>
      <input type="number" name="info-velocity-climb" />
    </div>
  );
}
