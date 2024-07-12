// import tea from "../../public/assets/Images/teagreen.png"
const tea = "/assets/Images/teagreen.png";
// import flower from "../../public/assets/Images/Flower.png";
// const flower = "/assets/Images/Flower.png";
import { Strelka, Good, Plus } from "../ui-kit/icons";
export const mock = [
  {
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
];
export const mock2 = [
  {
    // image: flower,
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    // image: flower,
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    // image: flower,
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    // image: flower,
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    // image: flower,
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
  {
    // image: flower,
    image: tea,
    title: "Чай черный",
    description:
      "Наша дружелюбная команда с удовольствием поможет вам выбрать именно тот чай, который подходит вам.",
    price: "24.50 Lei",
  },
];

export const mock3 = [
  { id: 0, title: "Выгодня цена", icon: <Good />, value: "favorible_price" },
  { id: 1, title: "Дешевле", icon: <Strelka />, value: "less_expensive" },
  {
    id: 2,
    title: "Дороже",
    icon: <Strelka className="rotate-180" />,
    value: "more_expensive",
  },
  { id: 3, title: "Новинки", icon: <Plus />, value: "new_products" },
];
export const mock4 = [
  { id: 0, title: "12" },
  { id: 1, title: "24" },
  { id: 2, title: "48" },
];

// export const mock5 = [
//   { id: 1, title: "Ру", value: `Ру` },
//   { id: 2, title: "Ro", value: `Ro` },
//   // { id: 3, title: "En", value: `En` },
// ];

export const privacyText = [
  { id: 0, title: "privacy_title_0", text: "privacy_text_00" },
  { id: 1, title: "privacy_title_1", text: "privacy_text_01" },
  { id: 2, title: "privacy_title_2", text: "privacy_text_2" },
  { id: 3, title: "privacy_title_3", text: "privacy_text_3" },
  { id: 4, title: "privacy_title_4", text: "privacy_text_4" },
  { id: 5, title: "privacy_title_5", text: "privacy_text_5" },
  { id: 6, title: "privacy_title_6", text: "privacy_text_6" },
  { id: 7, title: "privacy_title_7", text: "privacy_text_7" },
];

export const termsText = [
  { id: 0, title: "terms_title_0", text: "terms_text_00" },
  { id: 1, title: "terms_title_1", text: "terms_text_01" },
  { id: 2, title: "terms_title_2", text: "terms_text_2" },
  { id: 3, title: "terms_title_3", text: "terms_text_3" },
  { id: 4, title: "terms_title_4", text: "terms_text_4" },
  { id: 5, title: "terms_title_5", text: "terms_text_5" },
  { id: 6, title: "terms_title_6", text: "terms_text_6" },
];
export const orders = [
  { id: 0, title: "Номер заказа", text: "order_number" },
  { id: 1, title: "Дата", text: "date" },
  { id: 2, title: "Адрес доставки", text: "delivery_address" },
  { id: 3, title: "Статус", text: "status" },
  { id: 4, title: "Действия", text: "action" },
];

export const flexRow = [
  { h5: "Чаи", p1: "15 товаров" },
  { h5: "Смузи", p1: "15 товаров" },
  { h5: "Сэндвичи", p1: "15 товаров" },
  { h5: "Десерты", p1: "15 товаров" },
  { h5: "Торты", p1: "15 товаров" },
];

export const labels = [
  { src: "/assets/Images/Labels/1.svg", width: 640, alt: "1" },
  { src: "/assets/Images/Labels/2.svg", width: 216, alt: "2" },
  { src: "/assets/Images/Labels/3.svg", width: 300, alt: "3" },
  { src: "/assets/Images/Labels/4.svg", width: 252, alt: "4" },
  { src: "/assets/Images/Labels/5.svg", width: 235, alt: "5" },
  { src: "/assets/Images/Labels/6.svg", width: 476, alt: "6" },
];
