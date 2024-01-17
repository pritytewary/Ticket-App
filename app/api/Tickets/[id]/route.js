import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundTicket = await Ticket.findOne({ _id: id });

    if (!foundTicket) {
      return NextResponse.json(
        { message: "Ticket not found", error: "Ticket not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    const deletedTicket = await Ticket.findByIdAndDelete(id);

    if (!deletedTicket) {
      return NextResponse.json(
        { message: "Ticket not found", error: "Ticket not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;
    const updateTicket = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return NextResponse.json({ message: "Ticket Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
