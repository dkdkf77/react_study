import React from 'react';
import './css/event.css';

function Event() {
  return (
    <section>
      <article>
        <div className="eventHome">
          <ul>
            <li>HOME</li>
            <li>></li>
            <li>이벤트</li>
            <li>></li>
            <li>이벤트 홈</li>
          </ul>
        </div>
        <header className="eventBanner">
          <div></div>
        </header>
        <article className="eventBox">
          <div className="eventSubBanner"></div>
          <div className="eventSubNotice">
            <div className="eventResult">
              <ul>
                <li>
                  <h4>이벤트 결과</h4>
                </li>
                <li>
                  <p>더보기</p>
                </li>
              </ul>
            </div>
            <div className="eventNtc">
              <ul>
                <li>[6월웰컴키트]6월 첫 구매 응모 이벤트</li>
                <li>아이엠마더 프로바이오틱스&비타민D</li>
                <li>[5월웰컴키트]5월 첫 구매 응모 이벤트</li>
                <li>[4월웰컴키트]4월 첫 구매 응모 이벤트</li>
              </ul>
            </div>
          </div>
        </article>
        <article>
          <header className="eventNow">
            <h3>이벤트</h3>
            <ul>
              <li>
                <h4>진행중인 이벤트</h4>{' '}
              </li>
              <li>
                <h4>종류된 이벤트</h4>
              </li>
            </ul>
          </header>
          <article className="eventNowContent">
            <div>
              <ul>
                <li>
                  <img src="" alt="" />
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </article>
          <article className="eventNowContent">
            <div>
              <ul>
                <li>
                  <img src="" alt="" />
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </article>
          <article className="eventNowContent">
            <div>
              <ul>
                <li>
                  <img src="" alt="" />
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </article>
        </article>
        <div className="eventNum">
          <ul>
            <li>1</li>
          </ul>
        </div>
      </article>
    </section>
  );
}

export default Event;
