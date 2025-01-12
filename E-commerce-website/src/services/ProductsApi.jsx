import axios from "axios";

export const onGetProductSellList = async () => {
  const response = await axios.get("https://676d89e6df5d7dac1cc86fde.mockapi.io/product/sell");  
  return response.data;
}

export const onGetProductDetail = async ({id}) => {
  const response = await axios.get(`https://676d89e6df5d7dac1cc86fde.mockapi.io/product/sell/${id}`);
  return response.data;
}

export const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
  },
  {
    name: "John D.",
    rating: 4,
    text: "Great quality, will definitely buy more."
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "Absolutely love my new dress! It fits perfectly and the fabric is so soft. Highly recommend!"
  },
  {
    name: "Michael B.",
    rating: 4,
    text: "The jacket I purchased is stylish and comfortable, though I wish it was available in more colors."
  },
  {
    name: "Anna K.",
    rating: 5,
    text: "The best shopping experience! The clothes are even better in person. I'm in love with everything I bought!"
  },
  {
    name: "David L.",
    rating: 3,
    text: "The product was good, but the delivery took longer than expected."
  },
  {
    name: "Jessica P.",
    rating: 5,
    text: "I am so impressed with the quality of the gym wear I ordered. Perfect for workouts and so stylish!"
  },
  {
    name: "Chris T.",
    rating: 4,
    text: "The quality is great, but I had to return a size that didn't fit. Customer service was very helpful though!"
  }
];

