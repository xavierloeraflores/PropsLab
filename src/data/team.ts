import { type TeamCollectionProps } from "~/components/team-section/team-collection";
import { type TeamMemberProps } from "~/components/team-section/team-member";

const member1: TeamMemberProps = {
  name: "Ryan Tran",
  title: "Professor Props",
  description: "Founder of Props Lab",
  imageSrc: "/static/images/team/ryan.jpg",
};
const member2: TeamMemberProps = {
  name: "Team Member",
  title: "Role",
  description: "Description",
};

export const TeamCollectionData: TeamCollectionProps = {
  members: [member1, member2, member2, member2, member2, member2, member2],
};
