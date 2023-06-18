import React from 'react'; //react-app에서 제공하는 JSX&barbel을 사용하기 위함

function Potato() { //(1)component는 무조건 대문자 시작 (2)함수 작성 방식 2가지
    return <h3>I love potato</h3>;
}

export default Potato; //(3)export & 사용할 곳에서 import해야 공유 가능