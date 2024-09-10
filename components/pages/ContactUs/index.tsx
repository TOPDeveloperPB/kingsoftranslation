import { storyblokEditable } from "@storyblok/react/rsc";

export function ContactUs({ blok }: any) {
  console.log(blok);

  return <div {...storyblokEditable(blok)}>{blok.title}</div>;
}
