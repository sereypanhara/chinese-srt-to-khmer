export default {
  async fetch(request) {
    return new Response("Khmer SRT Translation Server is ready!", {
      headers: {
        "content-type": "text/plain; charset=UTF-8"
      }
    });
  }
};
