import React from 'react';
import './css/market.css';

function Market() {
  return (
    <div>
      <article>
        <div className="marketHome">
          <ul>
            <li>Home</li>
            <li> ></li>
            <li>시크릿마켓</li>
          </ul>
        </div>
        <header className="marketcontent">
          <div className="marketcontentB">
            <h3>웰컴, 여기는 시크릿마켓</h3>
            <p>
              남양몰 특가요원이 알려드리는 오늘의 시크릿코드는?
              <br />
              <span>
                시크릿코드 : 가을강추특가
                <br />
              </span>
              지금 바로 입력하고 초특가의 세계로@
            </p>
          </div>
        </header>
        <section className="marketCode">
          <header>
            <h3>시크릿코드 입력</h3>
            <p>필수입력 항목</p>
          </header>
          <section className="marketCodeInput">
            <div>
              <p>시크릿코드</p>
              <input type="text" placeholder="시크릿코드를 입력해주세요" />
            </div>
          </section>
          <button>확인</button>
        </section>
      </article>
    </div>
  );
}

export default Market;
