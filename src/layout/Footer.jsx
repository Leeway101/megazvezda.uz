import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import "./Footer.css";

const Footer = ({ selectedLanguage }) => {
  const languages = {
    uz: {
      about: "Biz haqimizda",
      aboutUs:
        "Kompaniyamiz mijozlarning ehtiyojlarini yuqori sifatli xizmatlar bilan qondirishni maqsad qilgan. Innovatsion yondashuv va malakali jamoa bilan bizning xizmatlarimiz ishonchli va samaralidir.",
      contact: "Biz bilan bog'laning",
      address:
        "Toshkent shahar, Yakkasaroy ko'chasi, Konstitutsiya MFY, Tafakkur ko'chasi, Tor ko'chasi, 98-uy",
      phone1: "+998 (70) 203 33 00",
      phone2: "+998 (90) 346 99 88",
      email: "info@megazvezda.uz",
      socialNetworks: "Ijtimoiy tarmoqlar",
      rights: "Barcha huquqlar himoyalangan.",
    },
    ru: {
      about: "О нас",
      aboutUs:
        "Наша компания ставит своей целью удовлетворение потребностей клиентов, предоставляя услуги высокого качества. С инновационным подходом и квалифицированной командой наши услуги надежны и эффективны.",
      contact: "Связаться с нами",
      address:
        "г. Ташкент, улица Якасарай, МФЙ Конституции, улица Тафаккур, улица Тор, дом 98",
      phone1: "+998 (70) 203 33 00",
      phone2: "+998 (90) 346 99 88",
      email: "info@megazvezda.uz",
      socialNetworks: "Социальные сети",
      rights: "Все права защищены.",
    },
    en: {
      about: "About Us",
      aboutUs:
        "Our company aims to meet the needs of customers by providing high-quality services. With an innovative approach and a skilled team, our services are reliable and efficient.",
      contact: "Contact with Us",
      address:
        "Tashkent city, Yakkasaroy street, Constitution MFY, Tafakkur street, Tor street, house 98",
      phone1: "+998 (70) 203 33 00",
      phone2: "+998 (90) 346 99 88",
      email: "info@megazvezda.uz",
      socialNetworks: "Social networks",
      rights: "All rights reserved.",
    },
  };

  return (
    <footer className="footer bg-dark text-light">
      <Container>
        <Row>
          {/* Ishxona haqida qisqacha ma'lumot */}
          <Col md={4}>
            <h5>{languages[selectedLanguage].about}</h5>
            <p>{languages[selectedLanguage].aboutUs}</p>
          </Col>

          {/* Bog‘lanish ma'lumotlari */}
          <Col md={4}>
            <h5>{languages[selectedLanguage].contact}</h5>
            <p>
              <FaMapMarkerAlt />
              {languages[selectedLanguage].address}
            </p>
            <p>
              <FaPhoneAlt /> {languages[selectedLanguage].phone1}
            </p>
            <p>
              <FaPhoneAlt /> {languages[selectedLanguage].phone2}
            </p>
            <p>
              <FaEnvelope /> {languages[selectedLanguage].email}
            </p>
          </Col>

          {/* Ijtimoiy tarmoqlar */}
          <Col md={4}>
            <h5>{languages[selectedLanguage].socialNetworks}</h5>
            <div className="d-flex">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light me-3"
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="text-center">
          &copy; 2024 {languages[selectedLanguage].rights} {/* Huquqlar */}
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
