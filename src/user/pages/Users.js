import React from "react";
import UsersList from "../components/UsersList";

function Users() {
  const USERS = [
    {
      id: "u1",
      name: "Abdullah Akkoloğlu",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
      places: 3,
    },
    {
      id: "u2",
      name: "Talha Akkoloğlu",
      image:
        "https://media.cnn.com/api/v1/images/stellar/prod/231110082902-01-jared-leto-empire-state-building-1108.jpg?c=original",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}

export default Users;
