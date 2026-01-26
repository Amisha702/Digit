export type CardProps = {
  name: string;
  description: string;
  image: string;
  price?: number;
  rating: number;
  onClick?: () => void;
};
