import React from 'react';
import './css/special.css';
function Special() {
  return (
    <section>
      <article>
        <div className="specialHome">
          <ul>
            <li>HOME</li>
            <li>></li>
            <li>기획전</li>
          </ul>
        </div>
        <header className="headerBanner">
          <div>
            <h1>
              소중한 내 아이를 위한
              <br />
              남양분유 <b>인기상품 모음전</b>
            </h1>
            <p>잘나가는 남양분유를 남양몰에서 만나보세요</p>
          </div>
        </header>
        <article className="specialMain">
          <header>
            <h3>남양 기획전</h3>
            <p>
              총 <span>2</span>건의 기획전이 있습니다.
            </p>
          </header>
          <article className="specialContents">
            <div>
              <ul>
                <li>1</li>
                <li>2</li>
              </ul>
            </div>
          </article>
        </article>
        <article className="specialMain">
          <header>
            <h3>입점사 기획전</h3>
            <p>
              총 <span>1</span>건의 기획전이 있습니다.
            </p>
          </header>
          <article className="specialContents">
            <div>
              <ul>
                <li>1</li>
              </ul>
            </div>
          </article>
        </article>
      </article>
    </section>
  );
}

export default Special;
