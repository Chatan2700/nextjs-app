import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>Dashboard Users</div>

      <ul className="mt-5">
        <li>
          <Link href="/dashboard/users/user01">User 01</Link>
        </li>
        <li>
          <Link href="/dashboard/users/user02">User 02</Link>
        </li>
        <li>
          <Link href="/dashboard/users/user03">User 03</Link>
        </li>
        <li>
          <Link href="/dashboard/users/user0">User 04</Link>
        </li>
      </ul>
    </>
  );
};

export default page;
