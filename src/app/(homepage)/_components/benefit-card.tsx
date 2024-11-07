import { FC } from "react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const BenefitCard: FC<BenefitCardProps> = (props) => {
  const {icon, title, description} = props;

  return (
    <div
      className="shadow-card border rounded-lg px-12 pt-20 pb-12 bg-white space-y-5 relative"
    >
      <div className="absolute size-20 bg-[#ffdecc] border rounded-xl left-[5%] top-0 -translate-y-1/2 flex items-center justify-center">
        {icon}
      </div>

      <h1 className="text-[28px] font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};
