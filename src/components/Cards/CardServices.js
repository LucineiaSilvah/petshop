import React from "react";
import banho from "../../img/banho.png";

export function CardServices() {
  return (
    <div>
      <div className="card-s">
        <img src={banho} alt="" />
        <p>
          Um banho de carinho para os nossos peludos: onde água e amor se
          encontram para deixar nossos pets ainda mais radiantes
        </p>
        <button type="">Contratar</button>
      </div>
    </div>
  );
}
