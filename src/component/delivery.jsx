import React from 'react';
import './css/delivery.css';

function Delivery() {
  return (
    <section>
      <article>
        <div className="deliveryHome">
          <ul>
            <li>HOME</li>
            <li>></li>
            <li>가정배달</li>
          </ul>
        </div>
      </article>
      <header className="deliveryBanner">
        <div></div>
      </header>
      <article className="deliverySubBanner">
        <div></div>
        <div></div>
      </article>
      <article>
        <header className="deliveryContentH">
          <ul>
            <li>가정배달 추천제품</li>
            <li>아이를 위한 제품</li>
          </ul>
        </header>
        <article className="deliveryContentA">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
        <article className="deliveryDistribute">
          <header>
            <h3>분류별 상품</h3>
            <div className="deliveryCatagory">
              <ul>
                <li>우유</li>
                <li>가공유,음료</li>
                <li>베이비,키즈존</li>
              </ul>
              <h3>더 많은 상품 보기</h3>
            </div>
          </header>
          <article className="deliveryBoxs">
            <div></div>
          </article>
        </article>
        <article>
          <header>
            <div className="deliveryCatagory2">
              <ul>
                <li>가정배달 인기 브랜드</li>
              </ul>
              <h3>자세히 보기 </h3>
            </div>
          </header>
          <article className="deliveryBoxs2">
            <div></div>
          </article>
        </article>
      </article>
      <article className="deliveryFinder">
        <div>
          <ul>
            <li>우리집 가정배달 대리점 확인</li>
            <input
              type="text"
              placeholder="주소지를 입력하시면 대리점 정보를 확인하실 수 있습니다"
              name=""
              id=""
            />
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Delivery;
