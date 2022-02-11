import axios from "axios";
import { CONFIG } from "../const/config";

export class CommentService {
  constructor(URL) {
    this.baseUrl = URL;
  }

  getFullApiUrl(path) {
    return `${this.baseUrl}${path}`;
  }

  async getComments() {
    const res = await axios.get(this.baseUrl);
    return res.data;
  }

  async getOneComment(id) {
    const res = await axios.get(this.getFullApiUrl(id));
    return res.data;
  }
}

export const commentService = new CommentService(CONFIG.baseUrl);
