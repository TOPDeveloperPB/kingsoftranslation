import { storyblokEditable } from "@storyblok/react";

const components: Record<string, any> = {
  teaser: (props: any) => <h1 {...storyblokEditable(props)}>{props.title}</h1>,
};

export function DynamicComponent({ blok }: { blok: any }) {
  const Component = components[blok.component as string];

  if (Component) {
    return <Component {...blok} />;
  }

  return <p>The component {blok.component} has not been created yet.</p>;
}
