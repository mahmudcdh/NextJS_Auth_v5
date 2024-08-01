import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/mongo";

export const POST = async ( request ) => {

    const { name, email, password } = await request.json();

    console.log( name, email, password );

    // Create a DB Connection
    await dbConnect();

    // Encrypt the Password
    const hashedPassword = await bcrypt.hash(password, 8);

    // Form a DB Payload
    const newUser = {
        name, email, password: hashedPassword
    }

    // Update the DB
    try{
        await createUser( newUser );
    }
    catch(err){
        return new NextResponse(err.message, {
            status: 500,
        });
    }
    

    return new NextResponse("User has been created", {
        status: 201,
    });
}