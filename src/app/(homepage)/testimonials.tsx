import { Section } from "@/components/section";
import { TextimonialCard } from "./_components/textimonial-card";
import { chunk } from "lodash-es";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialsData } from "@/data/homepage/testimonials-data";
import { FC } from "react";

type TestionialItem = {
  avatar: string;
  name: string;
  score: number;
  quote: string;
};

export const Testimonials = () => {
  const { tag, title, description, data } = TestimonialsData;

  const Item: FC<{ items: TestionialItem[] }> = ({ items }) => (
    <CarouselItem className="gap-[50px] grid grid-cols-3 pb-2 px-[50px]">
      {items.map((d) => (
        <TextimonialCard
          avatar={<img src={d.avatar} />}
          name={d.name}
          score={d.score}
          quote={d.quote}
          key={d.name}
        />
      ))}
    </CarouselItem>
  );

  return (
    <Section tag={tag} title={title} description={description}>
      <Carousel className="xl:flex hidden">
        <CarouselContent>
          {chunk(data, 3).map((items, index) => (
            <Item items={items} />
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="size-14 border bg-white rounded-lg"
          variant="default"
        />
        <CarouselNext
          className="size-14 border bg-white rounded-lg"
          variant="default"
        />
      </Carousel>

      <Carousel className="lg:flex xl:hidden hidden">
        <CarouselContent>
          {chunk(data, 2).map((items, index) => (
            <Item items={items} />
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="size-14 border bg-white rounded-lg"
          variant="default"
        />
        <CarouselNext
          className="size-14 border bg-white rounded-lg"
          variant="default"
        />
      </Carousel>

      <Carousel className="lg:hidden flex flex-col gap-5">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <TextimonialCard
                avatar={<img src={item.avatar} />}
                name={item.name}
                score={item.score}
                quote={item.quote}
                key={item.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-center gap-5">
          <CarouselPrevious
            className="size-14 border bg-white rounded-lg translate-y-0 relative left-0"
            variant="default"
          />
          <CarouselNext
            className="size-14 border bg-white rounded-lg translate-y-0 relative right-0"
            variant="default"
          />
        </div>
      </Carousel>
    </Section>
  );
};
