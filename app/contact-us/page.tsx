import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export default async function ContactUsPage() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/contact-us`, { version: "draft" });
}
