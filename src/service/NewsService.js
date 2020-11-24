function checkRes(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(res.status);
  }
}
function nullCheck(res) {
  if (res) {
    return res;
  } else {
    throw new Error("404: нет такой страницы!");
  }
}
function editItem(res) {
  if (!res.kids) res.kids = [];
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
    return fetch(`${this.apiUrl}/v0/item/${id}.json`).then(checkRes).then(nullCheck).then(editItem);
  };

  getListFromIds = (ids) => {
    const itemPromiseArray = ids.map((id) => this.getSingleItem(id));
    return Promise.all(itemPromiseArray);
  };
}
