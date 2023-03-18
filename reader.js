const Parser = require('rss-parser');
const parser = new Parser();

const rssUrl = 'https://example.com/rss';

parser.parseURL(rssUrl).then((feed) => {
  console.log(feed.title);
  feed.items.forEach((item) => {
    console.log(item.title);
  });
}).catch((err) => {
  console.error(err);
});
