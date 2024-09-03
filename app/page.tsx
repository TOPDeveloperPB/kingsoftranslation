import { Home } from "@/components/pages/Home";
import storyblokClient from "@/lib/storyblokClient";

export default async function Page() {
  const { data } = await storyblokClient.get("cdn/stories/Home", {
    version: "draft",
  });

  return <Home data={data?.story?.content?.content} />;
  // return <Home data={data} />;
}
