import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// INSERT INTO jd_cover_letter (jd_id, subject, content_length, created_time, updated_time) VALUES
// (27008, '자소서 문항1', 1000, NOW(), NULL),
//   (27008, '자소서 문항2', 1000, NOW(), NULL),
//   (27008, '자소서 문항3', 1000, NOW(), NULL);
//
// ### 작성 가이드
//
// - 1번째 칸
// - 공고의 ID
// - [https://고초대졸.com/jd/detail/27008](https://xn--299a59id5upfe.com/jd/detail/27008)
// - 위 링크에서 맨 뒤에 숫자입니다.
// - 2번째 칸
// - 자소서 문항
// - 3번째 칸
// - 최대 글자 수입니다.
// - 글자 수 제한이 없다면 `NULL` 로 입력합니다.
//
//   문항이 N개라면 `(27008, '자소서 문항1', 1000, NOW(), NULL)` 해당 내용을 N줄 작성합니다.
//
//   마지막 줄 맨 끝엔 `;` 기호를 붙이고 그 외엔 `,` 기호를 붙입니다.


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
