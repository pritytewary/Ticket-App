import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketByID = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to get ticket. Status: ${res.status}`);
  }

  return res.json();
};

const Ticketpage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketByID(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return (
    <div>
      <TicketForm ticket={updateTicketData} />
    </div>
  );
};

export default Ticketpage;
