import React, { useState } from 'react';
import './App.css';

const App = () => {



  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  // let [따봉, 따봉변경] = useState(0);
  let 따봉들 = [];
  for (let index = 0; index < 글제목.length; index++) {
    따봉들.push(0);
  }
  let [따봉, 따봉변경] = useState(따봉들);
  // let [따봉, 따봉변경] = useState([0,0,0]);

  let [modal, setModal] = useState(false); // 모달창을 동적으로 만들기 위해 현재 모달창의 상태를 저장

  let [title, setTitle] = useState(0);

  let [입력값, 입력값변경] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>

      {

        글제목.map(function (arr, i) {		// i 는 map 반복문이 돌때마다 0부터시작해서 1씩 증가하는 정수를 담고있다.

          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                setModal((!modal))
                setTitle(i)
              }}>{글제목[i]}
                <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)
                }}>👍</span> {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];

                copy.splice(i, 1);

                글제목변경(copy);
              }}>삭제</button>
            </div>
          );
        })
      }

      <input onChange={(e) => {
        // 뭔가 입력할 때마다 바로바로 함수 실행
        // e 안에는 onChange 이벤트에 대한 정보가 다 들어있음.
        console.log(e.target.value);
        // e.target.value 는 유저가 실제 입력한 값
        입력값변경(e.target.value);
      }}></input>
      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글발행</button>

      {
        // 1 == 1 ? '맞음' : '아님'	// 화면에 출력됨
        modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={글제목변경} /> : null
        // modal 값은 useState로 설정해둔 값을 가리킴.
      }

    </div>
  );
};

// 모달 컴포넌트 만듬
function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]} </h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;