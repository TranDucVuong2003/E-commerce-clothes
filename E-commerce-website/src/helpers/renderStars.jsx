import AHaflStar from "../assets/Icon/AHaflStar";
import StarIcon from "../assets/Icon/StarIcon";

export const renderStars = (rating, width, height) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<StarIcon key={i} width={width} height={height} />);
  }

  if (halfStar) {
    stars.push(<AHaflStar key="half"  width={width/2} height={height}  />);
  }

  return stars;
};
