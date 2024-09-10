import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

export function Page({ blok }: any) {
  return (
    <main {...storyblokEditable(blok)} className="grid">
      {blok.content.map((nestedBlok: any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
