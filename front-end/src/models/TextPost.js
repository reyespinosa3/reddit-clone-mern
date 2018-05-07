import axios from 'axios';

class TextPostModel {
  static create(textPost) {
    let request = axios.post("http://localhost:8080/api/posts", textPost);
    return request;
  }
  static all() {
    let request = axios.get("http://localhost:8080/api/posts");
    return request;
  }
  static delete(textPost) {
    let request = axios.delete(`http://localhost:8080/api/posts/${textPost._id}`);
    return request;
  }
  static update(textPostId, textPostBody) {
    let request = axios.put(`http://localhost:8080/api/posts/${textPostId}`, {
      body: textPostBody
    });
    return request;
  }
}


export default TextPostModel
