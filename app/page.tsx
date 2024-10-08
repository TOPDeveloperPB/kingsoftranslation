import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

export default async function HomePage() {
  const { data } = await fetchData();

  return <StoryblokStory story={data.story} />;
}

async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, { version: "draft" });
}
