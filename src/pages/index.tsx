import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import map from "../images/map.png";
import dayulMain from '../images/dayul-main.png';
import '../global.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main id="main">
      <section className="section">
    <div style={{display:'flex',justifyContent:'center'}}>
     <h3>다율이 첫 생일</h3>
        <h3>초대 합니다</h3>

    </div>
           <img id="img-dayul-main" src={dayulMain}/>
      </section>
      <section className="section">
        <p>9월 23일 토요일 오후 5시</p>
        <p>해운대 더파티 스카이룸</p>
      </section>
      <section className="section">
    <center>
        <h3>모시는 글</h3>
    </center>
        <p>저희 다율이가 첫 번째 생일을 맞이했습니다.</p>
        <p>그동안 많은 관심과 사랑을 주신 분들께 감사드리고자</p>
        <p>작은 자리를 마련했습니다.</p>
        <p>바쁘시더라도 꼭 참석해주셔서</p>
        <p>다율이의 첫 생일을 함께 축하해주세요</p>
      </section>
      <section className="section">
    <div style={{display:'flex'}}>
     <div className="parent-info">
          <label>아빠</label>
          <h4>정진석</h4>
    <a href="tel:+821093464639">전화하기</a>
        </div>
        <div className="parent-info">
          <label>엄마</label>
          <h4>이소정</h4>
    <a href="tel:+821040413669">전화하기</a>
        </div>

    </div>
         </section>
      <section className="section">
        <h3>사진첩</h3>
        <div>사진1</div>
        <div>사진2</div>
        <div>사진3</div>
        <div>사진4</div>
      </section>
      <section className="section">
        <a href="https://naver.me/xpPanYh5">
          <h3>오시는 길</h3>
        </a>
        <div>
          <img
            src={map}
            style={{ borderRadius: "50%", width: "250px", height: "250px" }}
          />
        </div>
        부산 해운대구 해운대해변로298번길 24 팔레드시즈 지하 1층 스카이룸
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
