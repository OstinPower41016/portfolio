import * as React from "react";
import { useTranslation } from "react-i18next";

import "./styles/Contact.scss";
import "./styles/Contact.input.scss";
import Container from "../layout/container";
import SectionHeader from "../UI/SectionHeader";
// icons
import vkIcon from "./images/Contacts/Vk.png";
import telegramIcon from "./images/Contacts/Telegram.png";
import githubIcon from "./images/Contacts/Github.png";
import whatsUpIcon from "./images/Contacts/Whats-up.png";

interface IContactProps {}

const ContactInput = (props: { type: string; placeholder: string }) => {
  return <input {...props} className="contact__input" />;
};

const ContactTextArea = (props: { placeholder: string }) => {
  return <textarea {...props} className="contact__textarea"></textarea>;
};

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contacts">
      <Container>
        <SectionHeader title={t("contacts.title")} subtitle={t("contacts.subtitle")} />
        <div className="contact__info">
          <form className="contact__form">
            <ContactInput type="text" placeholder={t("contacts.placeholderName")} />
            <ContactInput type="email" placeholder={t("contacts.placeholderEmail")} />
            <ContactTextArea placeholder={t("contacts.placeholderTextArea")} />
            <button className="contact__action">{t("contacts.submit-form-text")}</button>
          </form>
          <span className="contact__or">{t("contacts.or")}</span>
          <div className="contact__social">
            <a
              href="#"
              className="contact__social-item"
              data-animation="contact__social-item-visibility"
            >
              <span className="contact__social-descr">{t("contacts.write-on-vk")} </span>
              <img src={vkIcon} alt="" className="contact__social-icon" />
            </a>
            <a
              href="#"
              className="contact__social-item"
              data-animation="contact__social-item-visibility"
            >
              <span className="contact__social-descr">{t("contacts.find-on-telegram")} </span>
              <img src={telegramIcon} alt="" className="contact__social-icon" />
            </a>
            <a
              href="#"
              className="contact__social-item"
              data-animation="contact__social-item-visibility"
            >
              <span className="contact__social-descr">{t("contacts.write-on-whatsapp")} </span>
              <img src={whatsUpIcon} alt="" className="contact__social-icon" />
            </a>
            <a
              href="#"
              className="contact__social-item"
              data-animation="contact__social-item-visibility"
            >
              <span className="contact__social-descr">{t("contacts.find-on-github")}</span>
              <img src={githubIcon} alt="" className="contact__social-icon" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
