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

const data = [
  {
    avatar: <img src="/avatar.svg" />,
    name: "Jennifer B",
    score: 5,
    quote:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    avatar: <img src="/avatar2.svg" />,
    name: "David K",
    score: 5,
    quote:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    avatar: <img src="/avatar1.svg" />,
    name: "Emily L",
    score: 5,
    quote:
      "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    avatar: <img src="/avatar1.svg" />,
    name: "Wenhui Li",
    score: 5,
    quote:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    avatar: <img src="/avatar2.svg" />,
    name: "Jiawei Ye",
    score: 3,
    quote:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
];

const tag = "Their Happy Words 🤗";
const title = "Our Testimonials";
const description =
  "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.";

export const Testimonials = () => {
  return (
    <Section tag={tag} title={title} description={description}>
      <Carousel className="w-full justify-between items-center md:flex hidden">
        <CarouselContent>
          {chunk(data, 3).map((items, index) => (
            <CarouselItem
              key={index}
              className="gap-[50px] grid grid-cols-3 pb-2 px-[50px]"
            >
              {items.map((d) => (
                <TextimonialCard
                  avatar={d.avatar}
                  name={d.name}
                  score={d.score}
                  quote={d.quote}
                  key={d.name}
                />
              ))}
            </CarouselItem>
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

      <Carousel className="md:hidden flex">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <TextimonialCard
                avatar={item.avatar}
                name={item.name}
                score={item.score}
                quote={item.quote}
                key={item.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* <CarouselPrevious
          className="size-14 border bg-white rounded-lg"
          variant="default"
        />
        <CarouselNext
          className="size-14 border bg-white rounded-lg"
          variant="default"
        /> */}
      </Carousel>
    </Section>
  );
};
