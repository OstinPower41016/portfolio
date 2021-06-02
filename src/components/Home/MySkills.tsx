import * as React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

import "./styles/MySkills.scss";
import Container from "../layout/container";
import SectionHeader from "../UI/SectionHeader";
//icons
import Bem from "./images/MySkills/BEM.svg";
import CSS from "./images/MySkills/css.svg";
import Express from "./images/MySkills/Express.svg";
import HTML from "./images/MySkills/html.svg";
import JS from "./images/MySkills/JS.svg";
import Less from "./images/MySkills/Less.svg";
import Node from "./images/MySkills/Node.svg";
import ReactIcon from "./images/MySkills/React.svg";
import ReduxIcon from "./images/MySkills/Redux.svg";
import Sass from "./images/MySkills/Sass.svg";
import TS from "./images/MySkills/TS.svg";
import VueIcon from "./images/MySkills/Vue.svg";

const technology = [
  {
    icon: JS,
    name: "JavaScript",
    title:
      "JavaScript – это язык программирования, который добавляет интерактивность на ваш веб-сайт",
  },
  {
    icon: ReactIcon,
    name: "React",
    title:
      "React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую скорость, простоту и масштабируемость.",
  },
  {
    icon: ReduxIcon,
    name: "Redux",
    title:
      "Redux помогает вам отделить состояние приложения от React. Redux создает глобальный магазин, который находится на верхнем уровне вашего приложения и передает состояние всем остальным компонентам.",
  },
  {
    icon: TS,
    name: "TypeScript",
    title:
      "TypeScript — язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.",
  },
  {
    icon: VueIcon,
    name: "Vue",
    title:
      "Vue.js — это JavaScript библиотека для создания веб-интерфейсов с использованием шаблона архитектуры MVVM (Model-View-ViewModel).",
  },

  {
    icon: Node,
    name: "Node",
    title:
      "Node. js (или просто Node) — это серверная платформа для работы с JavaScript через движок V8. JavaScript выполняет действие на стороне клиента, а Node — на сервере.",
  },
  {
    icon: Express,
    name: "Express",
    title:
      "Express представляет собой популярный веб-фреймворк, написанный на JavaScript и работающий внутри среды исполнения node. js.",
  },
  {
    icon: Bem,
    name: "BEM",
    title:
      "БЭМ расшифровывается как: блок, элемент, модификатор. Это такой набор абстракций, на который можно разбить интерфейс и разрабатывать всё в одних и тех же терминах.",
  },
  {
    icon: Sass,
    name: "Sass",
    title:
      "Sass это расширение CSS, которое придаёт мощи и элегантности этому простому языку. Sass помогает сохранять огромные таблицы стилей хорошо организованными, а небольшим стилям работать быстро",
  },
  {
    icon: Less,
    name: "Less",
    title:
      "LESS – это препроцессор CSS, который очень сильно ускоряет оформление HTML страниц сайта при помощи таблицы стилей CSS. Препроцессор LESS – представляет собой язык (отчасти напоминающий язык программирования, но намного проще), который значительно расширит ваши возможности при написании CSS кода.",
  },
  {
    icon: CSS,
    name: "CSS",
    title:
      " CSS — Cascading Style Sheets — это каскадные таблицы стилей. ... По сути — язык, который отвечает за описание внешнего вида HTML-документа",
  },
  {
    icon: HTML,
    name: "HTML",
    title:
      "HTML (от английского HyperText Markup Language) — это язык гипертекстовой разметки страницы. Он используется для того, чтобы дать браузеру понять, как нужно отображать загруженный сайт.",
  },
];

interface IMySkillsProps {}


const MySkills: React.FunctionComponent<IMySkillsProps> = (props) => {
  const el = React.useRef<HTMLElement>(null);
  const {t} = useTranslation();


  return (
    <section className="my-skills" id="skills" ref={el}>
      <Container>
        <SectionHeader title={t('skills.title')} subtitle={t('skills.subtitle')} />
        <div className="my-skills__content">
          {technology.map(({ icon, name, title }, idx) => {
            return (
              <div
                className="my-skills__item"
                key={name}
                title={title}
                data-animation="my-skills__item-visible"
              >
                <div>
                  <img src={icon} alt={name} className="my-skills__img" />
                </div>
                <p className="my-skills__item-title">{name}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default MySkills;
