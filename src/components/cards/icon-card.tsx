import { FC } from "react";
import { Card } from "./card";

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const IconCard: FC<IconCardProps> = (props) => {
  const { icon, title, description } = props;

  return (
    <Card className="px-12 pt-20 pb-12 space-y-5 relative justify-start">
      <div className="absolute size-20 bg-secondary border rounded-xl left-[5%] top-0 -translate-y-1/2 flex items-center justify-center">
        {icon}
      </div>

      <h1 className="text-[28px] font-bold">{title}</h1>
      <p>{description}</p>
    </Card>
  );
};
