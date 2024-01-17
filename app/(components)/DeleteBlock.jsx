"use client";

import React from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className="text-red-400 hover:cursor-pointer hover:text-red-200"
        onClick={deleteTicket}
      />
    </div>
  );
};

export default DeleteBlock;
