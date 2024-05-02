import { db, Users, eq } from "astro:db";

export async function getinfo(session: any) {
    if (session) {
        const userinfo = await db
            .select()
            .from(Users)
            .where(eq(Users.email, session.user?.email || ""));

        if (userinfo.length > 0) {
            return userinfo[0];
        } else {
            // register user
            const username = session.user?.name || session.user?.email;
            const email = session.user?.email;
            const plan = 4; // change this to more secure plan id
            if (typeof username === "string" && typeof email === "string") {
                // insert form data into the Comment table
                await db.insert(Users).values({ username, email, plan });
            }
            return { username, email, plan };
        }
    }
}
