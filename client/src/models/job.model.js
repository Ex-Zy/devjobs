export default class JobModel {
  id = null;
  company = "";
  logo = "";
  logoBackground = "";
  position = "";
  postedAt = "";
  contract = "";
  location = "";
  website = "";
  apply = "";
  description = "";
  requirements = {
    content: "",
    items: [],
  };
  role = {
    content: "",
    items: [],
  };
}
