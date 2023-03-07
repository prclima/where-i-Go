import { useState } from "react";
import style from "./List.module.css";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

function List({ places }) {
  const [type, setType] = useState("rest");
  const [rating, setRating] = useState("");

  return (
    <div className={style.list}>
      <h4>Restaurantes, Hoteis e Atrações perto de você</h4>
      <form>
        <label>Tipo</label>
        <select
          value={type}
          name="type"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="rest">Restaurantes</option>
          <option value="hotel">Hoteis</option>
          <option value="atracaoes">Atrações</option>
        </select>
      </form>
      <form>
        <label>Avaliaçoes</label>
        <select
          value={rating}
          name="type"
          onChange={(e) => {
            setRating(e.target.value);
          }}
        >
          <option value={0}>Todos</option>
          <option value={3}>Até 3 estrelas</option>
          <option value={4}>Até 4 estrelas</option>
          <option value={4.5}>Acima de 4.5 estrelas</option>
        </select>
      </form>
      <div>
        <h4>Resultado:</h4>
        {places?.map((item, i) => (
          <div key={i}>
            <PlaceDetails place={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
