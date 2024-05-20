export const metadata = {
  title: "NewsWave"
};

import ArticleCard from '@/src/components/ArticleCard';
import NewsApi from '@/src/lib/NewsApi';
import { Nunito } from 'next/font/google';


const inter = Nunito({ subsets: ["latin"] });

export default async function Home() {
  const headlines = await NewsApi.getHeadLines();

  return (
    <main className="{inter.className}">
      <div className="px-3 py-2 container mx-auto">
      <h1 className="text-4xl my-6 font-bold font-serif text-center leading-tight">HeadLines</h1>
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2'>
          {headlines && headlines.map((news) => (
            <ArticleCard news={news} key={news.title} />
          ))}
        </div>
      </div>
    </main>
  );
}

