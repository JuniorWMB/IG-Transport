import React, { useState } from "react";
import ByProducts from "../components/ByProducts";
import adhesif from "../assets/adhesif.jpg";
import assiette from "../assets/assiette.jpg";
import bouteille from "../assets/bouteille.jpg";
import houssebleu from "../assets/houssebleu.jpg";
import houssered from "../assets/houssered.jpg";
import housseturq from "../assets/housseturq.jpg";
import livre from "../assets/livre.jpg";
import pendrie from "../assets/pendrie.jpg";
import standard from "../assets/standar.jpg";
// import tringle from "../assets/tringle.jpg";
// import vaisselle from "../assets/vaisselle.jpg";
import verre from "../assets/verre.jpg";

const dataPrice = [
  {
    id: "1",
    image: adhesif,
    description: "Adhesif PVC blanc 48mm x 66ml",
    price: 2.99,
    quantity: 1,
  },
  {
    id: "2",

    image: assiette,
    description: "Carton déménagement 24 à 48 assiettes BARREL",
    price: 12.9,
    quantity: 1,
  },
  {
    id: "3",

    image: bouteille,
    description: "Carton déménagement Bouteilles",
    quantity: 1,
    price: 2.9,
  },
  {
    id: "4",

    image: houssebleu,
    description: "Housse matelas Bleu 2 personnes polyethylene 160",
    quantity: 1,
    price: 4.7,
  },
  {
    id: "5",

    image: housseturq,
    description: "Housse matelas Turquoise 1 personne polyethylene ",
    quantity: 1,
    price: 3.5,
  },
  {
    id: "6",

    image: houssered,
    description: "Housse matelas Rose King Size",
    quantity: 1,
    price: 6.0,
  },
  {
    id: "7",

    image: livre,
    description: "Carton déménagement Objets lourds ",
    quantity: 1,
    price: 1.5,
  },
  {
    id: "8",

    image: pendrie,
    description: "Carton déménagement penderie",
    quantity: 1,
    price: 10.0,
  },
  {
    id: "9",

    image: standard,
    description: "Carton déménagement Standard renforce",
    quantity: 1,
    price: 1.99,
  },
  {
    id: "10",

    image: verre,
    description: "Carton déménagement 75 verres BARREL",
    price: 10.9,
    quantity: 1,
  },
];

function Products() {
  const [searchProduct, setSearchProduct] = useState("");
  const handleChange = (e) => {
    setSearchProduct(e.target.value);
  };

  const results = !searchProduct
    ? dataPrice
    : dataPrice.filter((produit) =>
        produit.description
          .toLowerCase()
          .includes(searchProduct.toLocaleLowerCase())
      );
  return (
    <div>
      <div
        className="header__sousHeader"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          className="input__searchproduct"
          type="text"
          value={searchProduct}
          onChange={handleChange}
          placeholder="Search"
          style={{
            width: "70%",
            height: "20%",
            borderRadius: "5px",
            border: "none",
            outline: "none",
            fontSize: "20px",
            padding: "5px 20px",
            boxShadow: "2px 2px 2px #2980b9",
          }}
        />
      </div>

      <ByProducts dataPrice={dataPrice} results={results} />
    </div>
  );
}

export default Products;
