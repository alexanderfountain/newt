// siteSettings.js
export default {
  name: "home",
  type: "document",
  title: "Home",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
  ],
};
