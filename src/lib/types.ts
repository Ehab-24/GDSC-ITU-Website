export type Member = {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  link: string;
};

export type Application = {
  _id?: string;
  fullName: string;
  email: string;
  contact: string;
  studentId: string;
  reason: string;
  experience: string;
  department: string;
  team: string;
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
  cvUrl?: string;
};

export type Competition = "cp" | "web"
