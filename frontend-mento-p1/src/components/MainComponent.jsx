import logoImg from "@images/logo-dark.svg";
import toggleImg from "@images/icon-sun.svg";
import CardComponent from "@components/CardComponent";
import { useState } from "react";
import cardDatas from "@/data.json";
const MainComponent = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  const [cards, setCards] = useState(cardDatas);
  console.log("cards", cards);
  const handleFilterClick = (category) => {
    console.log("Selected Category:", category);
    setActiveBtn(category);
  };

  const handleCardActive = (id) => {
    const findCard = cards.find((card) => card.id === id);
    findCard.isActive = !findCard.isActive;
    const filterCrads = cards.filter((card) => card.id != findCard.id);
    filterCrads.push(findCard);
    filterCrads.sort((a, b) => a.id - b.id);
    setCards(filterCrads);
  };

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
                ? cards
                : activeBtn === "active"
                ? cards.filter((cardData) => cardData.isActive)
                : cards.filter((cardData) => !cardData.isActive)
              ).map((info) => {
                return (
                  <CardComponent
                    key={info.id}
                    info={info}
                    handleCardActive={handleCardActive}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainComponent;
