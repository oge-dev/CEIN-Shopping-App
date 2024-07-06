// ProductsData.js
import MenGucciSneakers from "../assets/Men-Gucci-Sneakers.png";
import MenSuit from "../assets/Men-Suit.png";
import MenNikeTrackSuit from "../assets/Men-Nike-track-suit.png";
import MenRolexWatch from "../assets/Men-Rolex-wrist-watch.png";
import Feedback from "../assets/Feedback.png";

const ProductsData = [
  {
    category: "Men's Collections",
    title: "Check out most promising product bought by our buyer",
    Products: [
      {
        id: 1,
        name: "Men-Gucci-Sneakers",
        description: "This is the description for product 1.",
        price: 200,
        oldPrice: 300,
        image: MenGucciSneakers,
        section: "Men",
        rate: Feedback,
      },
      {
        id: 2,
        name: "Silk Suit - C345",
        description: "This is the description for product 2.",
        price: 49.99,
        image: MenSuit,
      },
      {
        id: 3,
        name: "Nike Track Suit",
        description: "This is the description for product 3.",
        price: 29.99,
        image: MenNikeTrackSuit,
      },
      {
        id: 4,
        name: "Rolex C156",
        description: "This is the description for product 4.",
        price: 49.99,
        image: MenRolexWatch,
      },
    ],
  },
  {
    category: "Women's Collections",
    Products: [
      {
        id: 5,
        name: "Product 1",
        description: "This is the description for product 1.",
        price: 29.99,
        image: "/path/to/image1.jpg",
      },
      {
        id: 6,
        name: "Product 2",
        description: "This is the description for product 2.",
        price: 49.99,
        image: "/path/to/image2.jpg",
      },
    ],
  },
  {
    category: "Kids Collections",
    Products: [
      {
        id: 7,
        name: "Product 1",
        description: "This is the description for product 1.",
        price: 29.99,
        image: "/path/to/image1.jpg",
      },
      {
        id: 8,
        name: "Product 2",
        description: "This is the description for product 2.",
        price: 49.99,
        image: "/path/to/image2.jpg",
      },
    ],
  },
];

export default ProductsData;
