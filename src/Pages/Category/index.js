import React from "react";
import { useParams } from "react-router-dom";

function Catecory() {
  const { catId } = useParams();
  console.log(catId);
  return (
    <div>
      <h3>Catecory {catId} Selected</h3>
    </div>
  );
}

export default Catecory;
