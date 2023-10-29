"use client";

import React, { useEffect, useState } from "react";

const Products = (props) => {
  const [product, setProduct] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://ckwhite-d3ov6wzrda-as.a.run.app/api/v1.0/products"
      );
      return await res.json();
    };
    getData().then((dataRows) => setProduct(dataRows?.responeData?.rows));
  }, []);
  console.log(product);
  return (
    <div>
      {product?.map((x) => (
        <h1>{x.title}</h1>
      ))}
    </div>
  );
};

export default Products;
