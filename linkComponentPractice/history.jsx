import React, { useEffect } from "react";

function History({ history }) {
  const goBack = () => {
    history.goBack(); // 이전 컴포넌트상태로 되돌아가는 메소드
  };

  const goHome = () => {
    history.push("/"); // 설정되어 있는 컴포넌트로 이동
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block("정말 떠나실건가요?");
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div>
      <h3>History</h3>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default History;
