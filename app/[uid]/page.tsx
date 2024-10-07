import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { uid: string } }) {
  const client = createClient();
  let page;

  if (!params.uid || params.uid === "home") {
    // If no uid is provided or uid is "home", load the home page
    page = await client.getSingle("home");
  } else {
    // Otherwise, try to load the page by uid
    try {
      page = await client.getByUID("home", params.uid);
    } catch (error) {
      notFound(); // Handle 404 if the page is not found
    }
  }

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: { uid: string };
}): Promise<Metadata> {
  const client = createClient();
  let page;

  if (!params.uid || params.uid === "home") {
    // If no uid is provided or uid is "home", load the home page metadata
    page = await client.getSingle("home");
  } else {
    // Otherwise, load metadata for the page by uid
    try {
      page = await client.getByUID("home", params.uid);
    } catch (error) {
      return {
        title: "Page Not Found",
        description: "The page you're looking for doesn't exist.",
      };
    }
  }

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
