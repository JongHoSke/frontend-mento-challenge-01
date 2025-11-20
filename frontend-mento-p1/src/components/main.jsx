import logoImg from "../assets/images/logo-dark.svg";
import toggleImg from "../assets/images/icon-sun.svg";
import "../assets/css/main.css";
const Main = () => {
  return (
    <>
      <main class="main-bg">
        <div class="main-container">
          <div>
            <div class="logo-toggle">
              <img src={logoImg} alt="로고 이미지" />{" "}
              <button class="toggle-btn">
                <img src={toggleImg} alt="토글버튼" />
              </button>
            </div>
            <div>
              <span class="content-main-text">Extensions List</span>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
