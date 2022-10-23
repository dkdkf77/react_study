import React from "react";
import styles from "./membership_com02.module.css";
import styled from "styled-components";

const Button01 = styled.span`
  display: block;
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 3px;
  background: red;
  color: #fff;
  margin: 0 auto;
`;

function MemberCom02() {
  return (
    <div>
      <div className={styles.mainImg}></div>
      <div className={styles.con1}>
        <div className={styles.con1_h}>
          <Button01>혜택1</Button01>
        </div>
      </div>
      <div className={styles.con2}>
        <div className={styles.con2_h}>
          <Button01>혜택2</Button01>
        </div>
      </div>
      <div className={styles.con3}>
        <div className={styles.con3_h}>
          <Button01>혜택3</Button01>
        </div>
      </div>
      {/* <header>
          <div>혜택02</div>
          <h3>구매할수록 더욱 커지는 혜택</h3>
          <p>구매 단계별 할인 혜택이 적용됩니다</p>
        </header>
        <article>
          <div>
            <ul>
              <li></li>
              <li>
                <p>첫 구매부터 15% 할인</p>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li></li>
              <li>
                <p>구매 구간별 할인폭 증가</p>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li></li>
              <li>
                <p>
                  5회 구매확정 시 마다 사은품 증정 (구매확정 주문건수에 한함)
                </p>
              </li>
            </ul>
          </div>
        </article>
        <footer>
          <p>
            단계별 한 사람이 구매할 수 있는 구매 총량은 한정되어 있으며,
            구매량에 관계없이 구매 횟수로 사은품제공 및 할인율이 차등
            적용됩니다.
          </p>
        </footer> */}
    </div>
  );
}

export default MemberCom02;
