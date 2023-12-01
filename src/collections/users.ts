import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: {verify:{
    generateEmailHTML:({token})=>{return `<a href=${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}>Hello pls verify </a>`}
  }},
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      required: true,
      defaultValue: "user",
      admin:{
        condition: ({req}) => req?.user?.role === "Admin",
      },
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};

export default Users;
