import {
  AcademicCapIcon,
  FlagIcon,
  LifebuoyIcon,
  RocketLaunchIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";

export namespace BenefitsData {
  export const tag = "Children Deserve Bright Future";
  export const title = "Our Benefits";
  export const description =
    "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.";

  export const data = [
    {
      title: "Holistic Learning Approach",
      description:
        "our curriculum focuses on nurturing cognitive, social, emotional,and physical development, ensuring a well-rounded education.",
      Icon: AcademicCapIcon,
    },
    {
      title: "Experienced Educators",
      description:
        "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
      Icon: TrophyIcon,
    },
    {
      title: "Nurturing Environment",
      description:
        "We prioritize safety and provide a warm and caring atmosphere for every child.",
      Icon: RocketLaunchIcon,
    },
    {
      title: "Play-Based Learning",
      description:
        "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
      Icon: FlagIcon,
    },
    {
      title: "Individualized Attention",
      description:
        "Our small class sizes enable personalized attention, catering to each child's unique needs.",
      Icon: LifebuoyIcon,
    },
    {
      title: "Parent Involvement",
      description:
        "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
      Icon: UserGroupIcon,
    },
  ];
}