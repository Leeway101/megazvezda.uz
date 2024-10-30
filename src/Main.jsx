import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import contact from "./images/contact.png";
import service2 from "./images/servic2.png";
import "./Main.css";

const Main = ({ selectedLanguage }) => {
  const languages = {
    uz: {
      about:
        "\"MEGA ZVEZDA\" MCHJ O'zbekiston Respublikasi va MDHda ulgurji narxlarda aviatsiya yoqilg'isi taklif etadi. Mahsulot temir yo'l orqali omborlardan bevosita yetkazib beriladi.",
      service: "Xizmat",
      orderInstructionsTitle:
        "Aviatsiya yoqilg'isini qanday buyurtma berish kerak:",
      orderInstructions: [
        "Aviatsiya yoqilg'isini 'MEGA ZVEZDA' MCHJ dan buyurtma berish uchun:",
        "Veb-saytdagi fikrlar bo'limi orqali buyurtma qoldirish.",
        "Saytning eng pastgi qismidagi telfon raqamlarga bog'lanish orqali.",
        "Kompaniyaning elektron pochta manzili bilan bog'lanish: info@megazvezda.uz.",
        "Buyurtma qabul qilingandan so'ng, mutaxassislar tez orada reja tuzadi va mijozga xabar beradi.",
        "Shuningdek, kompaniya ulgurji narxlarda dizel yoqilg'isi, benzin va boshqa neft mahsulotlarini yetkazib berish imkoniyatiga ega.",
      ],
      contact: "Biz bilan bog'laning",
      name: "Ism",
      email: "Elektron pochta",
      message: "Xabar",
      send: "Yuborish",
      placeholderName: "Ismingizni kiriting",
      placeholderEmail: "Email manzilingizni kiriting",
      placeholderMessage: "Xabaringizni kiriting",
    },
    ru: {
      about:
        '"MEGA ZVEZDA" МЧЖ предлагает оптовые цены на авиакеросин в Республике Узбекистан и СНГ. Продукция доставляется напрямую из складов по железной дороге.',
      service: "Услуга",
      orderInstructionsTitle: "Как заказать авиакеросин:",
      orderInstructions: [
        "Чтобы заказать авиакеросин у 'MEGA ZVEZDA' МЧЖ:",
        "Оставьте заказ в разделе отзывов на сайте.",
        "через связь с телефонными номерами в самом низу сайта.",
        "Связаться с электронной почтой компании: info@megazvezda.uz.",
        "После получения заказа специалисты разработают план в кратчайшие сроки и уведомят клиента.",
        "Кроме того, компания имеет возможность поставлять оптовые дизельное топливо, бензин и другие нефтепродукты.",
      ],
      contact: "Свяжитесь с нами",
      name: "Имя",
      email: "Электронная почта",
      message: "Сообщение",
      send: "Отправить",
      placeholderName: "Введите ваше имя",
      placeholderEmail: "Введите адрес электронной почты",
      placeholderMessage: "Введите сообщение",
    },
    en: {
      about:
        '"MEGA ZVEZDA" LLC offers jet fuel at wholesale prices in the Republic of Uzbekistan and the CIS. The product is delivered directly from warehouses via railway.',
      service: "Service",
      orderInstructionsTitle: "How to Order Aircraft Fuel:",
      orderInstructions: [
        "To order aircraft fuel from 'MEGA ZVEZDA' LLC:",
        "By leaving an order through the feedback section on the website.",
        "by contacting the phone numbers at the bottom of the site.",
        "By reaching out to the company's email address: info@megazvezda.uz.",
        "Once the order is received, specialists will develop a plan in a short period and inform the customer.",
        "Additionally, the company is capable of delivering diesel fuel, gasoline, and other petroleum products at wholesale prices.",
      ],
      contact: "Contact Us",
      name: "Name",
      email: "Email address",
      message: "Message",
      send: "Send",
      placeholderName: "Enter your name",
      placeholderEmail: "Enter your email",
      placeholderMessage: "Your message",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    emailjs
      .send(
        "service_8e46wmn",
        "template_gcrszqi",
        trimmedData,
        "A9V7TyW6UwHzzn4WL"
      )
      .then(
        (response) => {
          alert("Xabaringiz yuborildi! Tez orada siz bilan bog‘lanamiz.");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert(
            "Xabar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring."
          );
          console.error("Xato:", error);
        }
      );
  };

  return (
    <div>
      <div id="about" className="title-section">
        <Container className="text-center ferst-section">
          <h1>{languages[selectedLanguage].about}</h1>
        </Container>
      </div>

      <section id="service" className="py-5">
        <Container>
          <h1 className="text-center mb-4">
            {languages[selectedLanguage].service}
          </h1>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="text-start mb-4">
                {languages[selectedLanguage].orderInstructionsTitle}
              </h1>
              <ul>
                {languages[selectedLanguage].orderInstructions.map(
                  (instruction, index) => (
                    <li key={index} style={{ fontSize: "1.5rem" }}>
                      {instruction}
                    </li>
                  )
                )}
              </ul>
            </Col>
            <Col md={6}>
              <img src={service2} alt="Aircraft Fuel" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5" id="contact">
        <Container>
          <h1 className="text-center mb-4">
            {languages[selectedLanguage].contact}
          </h1>
          <Row className="align-items-center">
            <Col md={6}>
              <img
                src={contact}
                alt="Contact Us"
                className="img-fluid background-image"
              />
            </Col>
            <Col md={6}>
              <Form onSubmit={handleSubmit} className="form">
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>{languages[selectedLanguage].name}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={languages[selectedLanguage].placeholderName}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="custom-input"
                  />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>{languages[selectedLanguage].email}</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={languages[selectedLanguage].placeholderEmail}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="custom-input"
                  />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>{languages[selectedLanguage].message}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder={languages[selectedLanguage].placeholderMessage}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="custom-input"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  {languages[selectedLanguage].send}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Main;
