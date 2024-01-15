import { z } from "zod";

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

const RegistrationSchema = z.object({
  teamName: z.string().min(3, "Team name must be atleast 3 characters long.").max(50, "Team name must be atmost 50 characters long."),
  institute: z.string().min(3, "Institute name must be atleast 3 characters long.").max(50, "Institute name must be atmost 50 characters long."),
  ambassadorCode: z.string().optional(),
  nMembers: z.number().min(1, "Number of members must be atleast 1").max(3, "Number of members can be atmost 3"),
  competition: z.enum(["cp", "web"]),
  teamMembers: z.array(z.object({
    name: z.string().min(3).max(50),
    cnic: z.string().min(13, "CNIC must be 13 characters long.").max(13, "CNIC must be 13 characters long."),
    email: z.string().email("Invalid email address."),
    phone: z.string().min(11, "Phone number must be 11 characters long.").max(11, "Phone number must be 11 characters long."),
  })),
})

const TeamSchema = z.object({
  teamName: z.string().min(3, "Team name must be atleast 3 characters long.").max(50, "Team name must be atmost 50 characters long."),
  institute: z.string().min(3, "Institute name must be atleast 3 characters long.").max(50, "Institute name must be atmost 50 characters long."),
  ambassadorCode: z.string().optional(),
  nMembers: z.number().min(1, "Number of members must be atleast 1").max(3, "Number of members can be atmost 3"),
})

type TeamData = z.infer<typeof TeamSchema>
type RegistrationData = z.infer<typeof RegistrationSchema>
type CompetitionType = RegistrationData["competition"]

export { RegistrationSchema, type RegistrationData, TeamSchema, type TeamData, type CompetitionType };
