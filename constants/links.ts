import { home, tasks, newgigs, business } from "@/public/assets";

export const links = [
  { icon: home, name: "Home", route: "/home" },
  { icon: business, name: "My Business", route: "/business" },
  { icon: tasks, name: "Tasks", route: "/tasks" },
  { icon: newgigs, name: "New Gig", route: "/newgig" },
];

export const userProfileModalLinks = [
  { name: "Profile", route: "/profile" },
  { name: "Dashboard", route: "/home" },
  { name: "Setting",route:"/settings" },
  { name: "Messages",route:"/messages" },
  { name: "My Business",route:"/business" },
];
