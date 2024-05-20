import { News } from "../lib/NewsApi";
import Image from "next/image";
import CardActionBar from "./CardActionBar";

interface ArticleCardProps {
    news: News;
}



const ArticleCard: React.FC<ArticleCardProps> = ({ news }) => {
    return (
        <div className="p-2 shadow-md">
            <Image
                height={500}
                src={news.urlToImage || "https://t3.ftcdn.net/jpg/02/68/55/60/360_F_268556012_c1WBaKFN5rjRxR2eyV33znK4qnYeKZjm.jpg"}
                alt={news.author}
                width={400}
                className="w-full"
            />
            <div className="p-3">
                <div className="text-xl truncate block">
                    {news.title}
                </div>
            </div>
            <CardActionBar news={news} />
        </div>
    )
}
export default ArticleCard;