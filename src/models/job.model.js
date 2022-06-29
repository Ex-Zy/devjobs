export default class Job {
  constructor({
    id,
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
    website,
    apply,
    description,
    requirements,
    role,
  } = {}) {
    this.id = id;
    this.company = company;
    this.logo = logo;
    this.logoBackground = logoBackground;
    this.position = position;
    this.postedAt = postedAt;
    this.contract = contract;
    this.location = location;
    this.website = website;
    this.apply = apply;
    this.description = description;
    this.requirements = requirements;
    this.role = role;
  }
}
