import Image from "next/image";

import SubHeading from "@/components/SubHeading/SubHeading";
import findus from "@/assets/findus.png";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Контакт" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Найди нас
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">г. Москва, ул. Большая Дмитровка, 13</p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Время работы
        </p>
        <p className="p__opensans">ПН - ПТ: 12:00 - 00:00 </p>
        <p className="p__opensans">Сб - ВС: 12:00 - 02:00 </p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Посетите нас
      </button>
    </div>

    <div className="app__wrapper_img">
			<Image src={findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
