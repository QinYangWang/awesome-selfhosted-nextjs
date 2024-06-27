import WebsiteCard from "@/components/website-card";
import { fetchWebsites } from "@/db/queries/websites";


export default async function Home() {
  const websites = await fetchWebsites()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        websites.map((website) => (
          <WebsiteCard website={website}></WebsiteCard>
        ))
      }
      
    </main>
  );
}
