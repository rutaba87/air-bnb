import zaferes from "../src/Images/zaferes.jpg";
import wedding from "../src/Images/wedding.jpg";
import biking from "../src/Images/biking.jpg";

export default [
  {
    id: 1,
    title: "Life Lessons With Kate Zaferes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel porttitor nulla, ac tincidunt est. Mauris metus turpis, dictum ac odio quis, porttitor maximus lorem. Vivamus ullamcorper auctor velit",
    price: 136,
    coverImg: `${zaferes}`,
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: "Online",
    openSpots: 0,
  },

  {
    id: 2,
    title: "Learn Wedding Photography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel porttitor nulla, ac tincidunt est. Mauris metus turpis, dictum ac odio quis, porttitor maximus lorem. Vivamus ullamcorper auctor velit.",
    price: 125,
    coverImg: `${wedding}`,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Online",
    openSpots: 27,
  },

  {
    id: 3,
    title: "Group Mountain Biking",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel porttitor nulla, ac tincidunt est. Mauris metus turpis, dictum ac odio quis, porttitor maximus lorem. Vivamus ullamcorper auctor velit.",
    price: 50,
    coverImg: `${biking}`,
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    openSpots: 0,
  },
];