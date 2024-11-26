import { type TeamCollectionProps } from "~/components/team-section/team-collection";
import { type TeamMemberProps } from "~/components/team-section/team-member";

const Ryan: TeamMemberProps = {
  name: "Ryan Tran",
  title: "Professor Props",
  description: "Founder of Props Lab",
  imageSrc: "/static/images/team/ryan.jpeg",
  sports: ["Football", "Basketball", "Baseball", "Hockey", "Soccer"],
};

const Collin: TeamMemberProps = {
  name: "Collin",
  title: "Analyst",
  description: "",
  imageSrc: "/static/images/team/collin.jpeg",
  sports: ["Esports", "BasketBall", "Esports"],
};
const Leech: TeamMemberProps = {
  name: "sT Leech",
  title: "Analyst",
  description: "",
  imageSrc: "/static/images/team/leech.jpeg",
  sports: ["Basketball", "Football", "Esports"],
};
const JustSamuel: TeamMemberProps = {
  name: "JustSamuel",
  title: "Analyst",
  description: "",
  imageSrc: "/static/images/team/justsamuel.jpg",
  sports: ["Esports"],
};
const VuuTang: TeamMemberProps = {
  name: "VuuTang",
  title: "Analyst",
  description: "",
  imageSrc: "/static/images/team/vuutang.jpeg",
  sports: ["Basketball"],
};

const Spectade: TeamMemberProps = {
  name: "Spectade",
  title: "Analyst",
  description: "",
  imageSrc: "/static/images/team/spectade.jpeg",
  sports: ["Hockey"],
};

const LockMan: TeamMemberProps = {
  name: "LockMan",
  title: "Co-Founder",
  description: "",
  imageSrc: "/static/images/team/lockman.jpeg",
  sports: ["Basketball", "Football", "Baseball"],
};

const Alex: TeamMemberProps = {
  name: "Alex",
  title: "Analyst",
  description: "",
  imageSrc: "/static/images/team/alex.jpeg",
  sports: ["Basketball", "Football", "Hockey", "Baseball"],
};

export const TeamCollectionData: TeamCollectionProps = {
  members: [Ryan, LockMan, Collin, Leech, JustSamuel, VuuTang, Spectade, Alex],
};
