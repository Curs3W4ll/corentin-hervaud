export default {
  install: (app) => {
    function slug(str) {
      return str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');
    }
    app.config.globalProperties.$slugger = slug;
    app.provide("slugger", { slug });
  },
};
