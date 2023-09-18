import { home, tasks, newgigs, logout, business } from "@/public/assets";

export const links = [
  { icon: home, name: "Home", route: "/home" },
  { icon: business, name: "My Business", route: "/business" },
  { icon: tasks, name: "Tasks", route: "/tasks" },
  { icon: newgigs, name: "New Gig", route: "/newgig" },
];
