import Storage from '../Services/Storage';

class Model {
  constructor(name) {
    this.name = name;
    this.init();
  }

  async init() {
    const exists = await Storage.getItem(this.name);

    if (exists) {
      return;
    }

    Storage.setItem(this.name, '[]');
  }

  async get(query) {
    const raw = await Storage.getItem(this.name);

    const data = JSON.parse(raw);

    if (query) {
      return data.filter(query);
    }

    return data;
  }

  set(data) {
    return Storage.setItem(this.name, JSON.stringify(data));
  }
}

export default Model;
