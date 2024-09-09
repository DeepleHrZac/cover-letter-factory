import { useState } from 'react'
import './App.css'

type CoverLetterItemFormValue = {
  subject: string;
  contentLength?: string;
}


function App() {

  const [coverLetters, setCoverLetters] = useState<CoverLetterItemFormValue[]>([]);

  const [jdId, setJdId] = useState("");
  const [subject, setSubject] = useState("")
  const [contentLength, setContentLength] = useState("");

  const handleMakeSQL = () => {

    if(!coverLetters) {
      return '';
    }

    if(coverLetters?.length === 1) {
      return `
      INSERT INTO jd_cover_letter (jd_id, subject, content_length, created_time, updated_time) VALUES
      ${jdId}, '${coverLetters[0].subject}', ${coverLetters[0].contentLength || "NULL"}, NOW(), NULL);
      `;
    }

    return `
    INSERT INTO jd_cover_letter (jd_id, subject, content_length, created_time, updated_time) VALUES
    ${
      coverLetters.map((coverLetter, index) => {
        return `(${jdId}, '${coverLetter.subject}', ${coverLetter.contentLength || "NULL"}, NOW(), NULL)${index === coverLetters.length - 1 ? ';' : ','}`
      }).join('\n')
    }
    `;
  }

  const handleCopySQL = () => {
    const sql = handleMakeSQL();
    navigator.clipboard.writeText(sql);
    alert("SQL 문이 복사되었습니다");
  }

  const handleAddCoverLetter = () => {

    if(jdId === "") {
      alert("공고 Id를 입력해주세요.");
      return;
    }

    if(subject === "") {
      alert("자소서 문항을 입력해주세요.");
      return;
    }

    setCoverLetters([...coverLetters, {
      subject,
      contentLength,
    }]);
    setContentLength("");
    setSubject("");
  }

  return (
    <div>
      <h2>
        자소서 항목 만들기
      </h2>
      <section>
        <button onClick={handleCopySQL}>
          SQL 문 복사하기
        </button>
      </section>
      <section>
        <article>
          <p>
            자소서 항목을 입력하시면 SQL 문이 생성됩니다.
          </p>
          <label>
            <p>공고 Id</p>
            <input value={jdId} onChange={(e)=> setJdId(e.target.value)}/>
          </label>
              <div className="form">
                <label>
                  <p>자소서 문항</p>
                  <textarea
                    id="subject"
                    className="subject"
                    value={subject} onChange={e=>setSubject(e.target.value)}/>
                </label>
                <label>
                  <p>최대 글자 수</p>
                  <input
                    id="contentLength"
                    type="number"
                    placeholder="최대 글자 수(없으면 공란)"
                    value={contentLength}
                    max={10000}
                    onChange={e => setContentLength(e.target.value)}
                    />
                </label>
                <button onClick={handleAddCoverLetter}>
                  항목 추가
                </button>
              </div>
        </article>

        <article>
          <div>
          <h2>결과</h2>
            <p className="result">
              {handleMakeSQL()}
            </p>
          </div>
        </article>
      </section>

    </div>
  )
}

export default App
