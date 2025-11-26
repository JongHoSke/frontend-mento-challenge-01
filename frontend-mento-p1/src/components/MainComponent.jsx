import logoImg from "@images/logo-dark.svg";
import toggleImg from "@images/icon-sun.svg";
import CardComponent from "@components/CardComponent";
import { useState } from "react";
import cardDatas from "@/data.json";
const MainComponent = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  console.log("카드 데이터", cardDatas);
  const handleFilterClick = (category) => {
    console.log("Selected Category:", category);
    setActiveBtn(category);
  };
  // if(activeBtn === "all") if(activeBtn === "active") if(activeBtn === "inactive")
  return (
    <>
      <main className="main-bg">
        <div className="main-container">
          <div>
            <div className="logo-toggle">
              <img src={logoImg} alt="로고 이미지" />{" "}
              <button className="btn-toggle">
                <img src={toggleImg} alt="토글버튼" />
              </button>
            </div>
            <div className="filter-btns">
              <span className="content-main-text">Extensions List</span>
              <div>
                <button
                  className={`btn-all filter-button ${
                    activeBtn === "all" ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick("all")}
                >
                  All
                </button>
                <button
                  className={`btn-active filter-button ${
                    activeBtn === "active" ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick("active")}
                >
                  Active
                </button>
                <button
                  className={`btn-inactive filter-button ${
                    activeBtn === "inactive" ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick("inactive")}
                >
                  Inactive
                </button>
              </div>
            </div>
            <div className="main-cards-container">
              {(activeBtn === "all"
                ? cardDatas
                : activeBtn === "active"
                ? cardDatas.filter((cardData) => cardData.isActive)
                : cardDatas.filter((cardData) => !cardData.isActive)
              ).map((info) => {
                return <CardComponent key={info.id} info={info} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainComponent;
