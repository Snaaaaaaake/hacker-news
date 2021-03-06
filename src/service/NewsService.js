function checkRes(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(res.status);
  }
}
function editItem(res) {
  if (res && !res.kids) res.kids = [];
  return res;
}

export default class NewsService {
  constructor() {
    this.apiUrl = "https://hacker-news.firebaseio.com/";
    this.packLength = 10;
    this.listLength = 100;
  }

  getRawList = () => {
    return fetch(`${this.apiUrl}/v0/newstories.json`).then(checkRes);
  };

  getSingleItem = (id) => {
    return fetch(`${this.apiUrl}/v0/item/${id}.json`).then(checkRes).then(editItem);
  };

  getListFromIds = (ids) => {
    const itemPromiseArray = ids.map((id) => this.getSingleItem(id));
    return Promise.all(itemPromiseArray);
  };
}
