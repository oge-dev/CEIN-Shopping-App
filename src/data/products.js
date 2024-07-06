import YellowSuwade from "../assets/Men-yellow-shoes.png";
import EthnicKurti from "../assets/Womens-Ethnic-kurti.png";
import VNeckTop from "../assets/Women-T-shirts.png";
import RoundTshirt from "../assets/fashion-stylish-model-dressed.png";

import MenGucciSneakers from "../assets/Men-Gucci-Sneakers.png";
import MenSuit from "../assets/Men-Suit.png";
import MenNikeTrackSuit from "../assets/Men-Nike-track-suit.png";
import MenRolexWatch from "../assets/Men-Rolex-wrist-watch.png";

import Feedback from "../assets/Feedback.png";

import WomenHandbag from "../assets/Women-handbag.png";
import WomenGown from "../assets/Women-gown.png";
import WomenShoes from "../assets/Women-shoes.png";
import TrackSuits from "../assets/Women-track-suits.png";

import Balletwear from "../assets/Rectangle760.png";
import CottonSoftSocks from "../assets/Children-nike-socks.png";
import NikeTrackSuit from "../assets/Children-nike-track-suit.png";
import PumaViverRunner from "../assets/Children-puma-shoes.png";

const ProductsData = [
  {
    category: "New Arrivals",
    title: "Check out most promising product bought by our buyer",
    Products: [
      {
        id: 1,
        name: "Yellow Suwade",
        description: "Description of Yellow Suwade",
        price: 180,
        oldPrice: 300,
        image: YellowSuwade,
        section: "Men",
        rate: Feedback,
      },
      {
        id: 2,
        name: "Ethnic Kurti",
        description: "Description of Ethnic Kurti",
        price: 350,
        oldPrice: 400,
        section: "Women",
        rate: Feedback,
        image: EthnicKurti,
      },
      {
        id: 3,
        name: "Women’s V-Neck Top",
        description: "Description for Women’s V-Neck Top",
        price: 380,
        oldPrice: 500,
        section: "Women",
        rate: Feedback,
        image: VNeckTop,
      },
      {
        id: 4,
        name: "Round Neck T-shirt",
        description: "This is the description for Round Neck T-shirt",
        price: 450,
        oldPrice: 500,
        section: "Men",
        rate: Feedback,
        image: RoundTshirt,
      },
    ],
  },
  {
    category: "Men's Collections",
    title: "Check out most promising product bought by our buyer",
    Products: [
      {
        id: 51,
        image: MenGucciSneakers,
        name: "Men-Gucci-Sneakers",
        description: "This is the description for Men-Gucci-Sneakers",
        price: 200,
        oldPrice: 300,
        section: "Men",
        rate: Feedback,
      },
      {
        id: 52,
        name: "Silk Suit - C345",
        description: "This is the description for Silk Suit - C345",
        price: 250,
        oldPrice: 300,
        section: "Men",
        rate: Feedback,
        image: MenSuit,
      },
      {
        id: 53,
        name: "Nike Track Suit",
        description: "This is the description for Nike Track Suit",
        price: 200,
        oldPrice: 300,
        section: "Men",
        rate: Feedback,
        image: MenNikeTrackSuit,
      },
      {
        id: 54,
        name: "Rolex C156",
        description: "This is the description for Rolex C156",
        price: 200,
        oldPrice: 300,
        section: "Men",
        rate: Feedback,
        image: MenRolexWatch,
      },
    ],
  },
  {
    category: "Women's Collections",
    title: "Check out most promising product bought by our buyer",
    Products: [
      {
        id: 101,
        name: "Leather Hand Bag",
        description: "This is the description for Leather Hand Bag.",
        price: 200,
        oldPrice: 300,
        section: "Women",
        rate: Feedback,
        image: WomenHandbag,
      },
      {
        id: 102,
        name: "Silk Saree Gown",
        description: "This is the description for Silk Saree Gown.",
        price: 250,
        oldPrice: 300,
        section: "Women",
        rate: Feedback,
        image: WomenGown,
      },
      {
        id: 103,
        name: "Black High Heels",
        description: "This is the description for Black High Heels.",
        price: 200,
        oldPrice: 300,
        section: "Women",
        rate: Feedback,
        image: WomenShoes,
      },
      {
        id: 104,
        name: "Soft Track Suit",
        description: "This is the description for Soft Track Suit.",
        price: 300,
        oldPrice: 350,
        section: "Women",
        rate: Feedback,
        image: TrackSuits,
      },
    ],
  },
  {
    category: "Kids Collections",
    title: "Check out most promising product bought by our buyer",
    Products: [
      {
        id: 151,
        name: "Complete Ballet wear",
        description: "This is the description for Complete Ballet wear.",
        price: 200,
        oldPrice: 300,
        section: "Kids",
        rate: Feedback,
        image: Balletwear,
      },
      {
        id: 152,
        name: "Cotton Soft Socks",
        description: "This is the description for Cotton Soft Socks.",
        price: 250,
        oldPrice: 300,
        section: "Kids",
        rate: Feedback,
        image: CottonSoftSocks,
      },
      {
        id:153,
        name: "Nike Track Suit",
        description: "This is the description for Nike Track Suit.",
        price: 200,
        oldPrice: 300,
        section: "Kids",
        rate: Feedback,
        image: NikeTrackSuit,
      },
      {
        id:154,
        name: "Puma Viver Runner",
        description: "This is the description for Puma Viver Runner.",
        price: 300,
        oldPrice: 350,
        section: "Men",
        rate: Feedback,
        image: PumaViverRunner,
      },
    ],
  },
];

export default ProductsData;
