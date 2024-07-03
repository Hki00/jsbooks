//express
//npm = node packge maneger

const express = require('express');
const app = express();
app.get('/', (request, response) => {
    const data = [
        {
            title : title1,
            author: author111,
            publishedAt: '2024-07-03 15:57:33',
            url: `http://naver.com`
        },
        {
            title : title22,
            author: author1222,
            publishedAt: '2024-07-02 15:57:33',
            url: `http://daum.com`
        },
        {
            title : title33,
            author: author333,
            publishedAt: '2024-07-01 15:57:33',
            url: `http://google.com`
        },
    ]
    response.send(`
        <html>
            <body>
                <div id = 'wrapper'>
                <p>뉴스데이터 제목(title)</p>
                <p>뉴스데이터 작성자(title)</p>
                <p>뉴스데이터 url(title)</p>
                <a href="'+d.url+'">뉴스데이터url(url)</a>
                <hr/>


            </body>
        </html>
    `);
});
const port = 8000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})