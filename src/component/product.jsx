import React from "react";
import "./css/product.css";

//제품한개를 출력하는 함수
function Prod({ prod }) {
  return (
    <div>
      <div>
        <span className="cold">냉장</span>
        <span
          className="cuphon"
          style={{
            //조건 && display : block;
            display: prod.cuphon && "block",
          }}
        >
          쿠폰
        </span>
      </div>
      <img src={prod.img} className="img" />
      <h4 className="title">{prod.title}</h4>
      <p className="price">{prod.price}</p>
    </div>
  );
}

function Product() {
  //제품 배열 선언
  const prods = [
    {
      id: 1,
      img: require("./images/milkImg.jpg"),
      title: "[냉장]맛있는우유 GT 수퍼밀크 900ml",
      price: "2980원",
      cuphon: false,
    },
    {
      id: 2,
      img: require("./images/milkImg.jpg"),
      title: "[냉장]맛있는우유 GT 박살밀크 400ml",
      price: "2980원",
      cuphon: true,
    },
    {
      id: 3,
      img: require("./images/milkImg.jpg"),
      title: "[냉장]맛있는우유 GT 바나나우유 400ml",
      price: "2980원",
      cuphon: true,
    },
    {
      id: 4,
      img: require("./images/milkImg.jpg"),
      title: "[냉장]맛있는우유 GT 초코우유 1000ml",
      price: "2980원",
      cuphon: true,
    },
    {
      id: 5,
      img: require("./images/milkImg.jpg"),
      title: "[냉장]맛있는우유 GT 초코우유 1000ml",
      price: "2980원",
      cuphon: true,
    },
    {
      id: 6,
      img: require("./images/milkImg.jpg"),
      title: "[냉장]맛있는우유 GT 초코우유 1000ml",
      price: "2980원",
      cuphon: true,
    },
    {
      id: 7,
      img: require("./images/milkImg.jpg"),
      title: "[냉장]맛있는우유 GT 초코우유 1000ml",
      price: "2980원",
      cuphon: true,
    },
    {
      id: 8,
      img: require("./images/milkImg.jpg"),
      title: "[냉장]맛있는우유 GT 초코우유 1000ml",
      price: "2980원",
    },
    {
      id: 9,
      img: require("./images/milkImg.jpg"),
      title: "[냉장]맛있는우유 GT 초코우유 1000ml",
      price: "2980원",
    },
    {
      id: 10,
      img: require("./images/milkImg.jpg"),
      title: "[냉장]맛있는우유 GT 초코우유 1000ml",
      price: "2980원",
    },
    {
      id: 11,
      img: require("./images/milkImg.jpg"),
      title: "[냉장]맛있는우유 GT 초코우유 1000ml",
      price: "2980원",
    },
    {
      id: 12,
      img: require("./images/milkImg.jpg"),
      title: "[냉장]맛있는우유 GT 초코우유 1000ml",
      price: "2980원",
    },
  ];

  return (
    <div>
      <article>
        <div className="homeBtn">
          <p>HOME 냉장제품</p>
        </div>
        <header className="productHeader">
          <div className="productHeaderIn">
            <h3>냉장제품</h3>
            <div>
              <p>
                총 <span>27개</span>의 상품이 있습니다/
              </p>
              <button>상세검색 +</button>
            </div>
          </div>
        </header>
        <section className="contnets">
          <header className="contentHeader">
            <div></div>
          </header>
          <section className="contentSection">
            {/* <Prod prod={prods[0]} />
            <Prod prod={prods[1]} />
            <Prod prod={prods[2]} />
            <Prod prod={prods[3]} /> */}
            {prods.map((prod, index) => (
              <Prod prod={prod} key={index} />
            ))}
          </section>
          <footer className="contentFooter">
            <ul>
              <li>1</li>
              <li>2</li>
            </ul>
          </footer>
        </section>
      </article>
    </div>
  );
}

export default Product;
