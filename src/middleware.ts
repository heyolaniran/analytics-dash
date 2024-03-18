import { NextRequest, NextResponse } from "next/server";
export default async function middleware (req : NextRequest) {

    if(req.nextUrl.pathname === '/') {

        try {
            
        } catch (error) {
            // render silently error 

            console.error(error) ; 
        }
        
    }

    // Get Request response 

    NextResponse.next() ; 


}

export const matcher = {
    matcher : ["/"]
}