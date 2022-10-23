import React from 'react';
import './css/brand.css';

function Brand() {
  return (
    <div>
      <article>
        <div className="brandHome">
          <ul>
            <li>HOME</li>
            <li>></li>
            <li>브랜드</li>
          </ul>
        </div>
        <header className="brandHeader">
          <div className="brandMainNav">
            <div>브랜드</div>
            <ul>
              <li>분류별</li>
              <li>이름별</li>
            </ul>
          </div>
          <div className="brandSub">
            <ul>
              <li>분유</li>
              <li>아기간식/이유식</li>
              <li>냉장제품</li>
              <li>단백질보충제/영양식</li>
              <li>두유/우유/물/음료</li>
              <li>커피/차</li>
              <li>가정배달</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </header>
        <section className="contents">
          <header>
            <h3>분유</h3>
          </header>
          <div>
            <section>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </section>
          </div>
        </section>
        <section className="contents">
          <header>
            <h3>아기간식/이유식</h3>
          </header>
          <div>
            <section>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </section>
          </div>
        </section>
        <section className="contents">
          <header>
            <h3>냉장제품</h3>
          </header>
          <div>
            <section>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </section>
          </div>
        </section>
        <section className="contents">
          <header>
            <h3>단백질보충제/영양식</h3>
          </header>
          <div>
            <section>
              <ul>
                <li>1</li>
              </ul>
            </section>
          </div>
        </section>
        <section className="contents">
          <header>
            <h3>두유/우유/물/음료</h3>
          </header>
          <div>
            <section>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </section>
          </div>
        </section>
        <section className="contents">
          <header>
            <h3>커피/차</h3>
          </header>
          <div>
            <section>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </section>
          </div>
        </section>
        <section className="contents">
          <header>
            <h3>가정배달</h3>
          </header>
          <div>
            <section>
              <ul>
                <li>1</li>
              </ul>
            </section>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Brand;
