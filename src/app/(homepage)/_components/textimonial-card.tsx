import { StarIcon } from "@heroicons/react/16/solid";
import { FC } from "react";

export interface TextimonialCardProps {
  avatar: React.ReactNode;
  name: string;
  score: number;
  quote: string;
}

export const TextimonialCard: FC<TextimonialCardProps> = (props) => {
  const { avatar, name, score, quote } = props;

  return (
    <div className="bg-white border rounded-lg p-12 flex flex-col gap-8 w-full h-full">
      <div className="flex flex-col justify-center items-center gap-3">
        <div className="rounded-full border-1 w-fit flex items-center justify-center bg-accent p-1">
          {avatar}
        </div>
        <h1 className="text-2xl font-semibold">{name}</h1>
      </div>

      <div className="flex justify-center">
        {[...Array(score)].map((s, i) => (
          <StarIcon className="fill-primary" width={24} key={i} />
        ))}
      </div>

      <p className="text-center">{quote}</p>
    </div>
  );
};
