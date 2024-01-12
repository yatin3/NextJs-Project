//localhost.com:3000/news/any-identifier
import {useRouter} from 'next/router';

function DetailPage(){
    const router = useRouter();

    const newsid = router.query.newsId;

    console.log(newsid);

    return <h1>The Detail Page</h1>
};

export default DetailPage;