import { defineDb, defineTable, column } from "astro:db";

const Users = defineTable({
    columns: {
        username: column.text(),
        email: column.text({ primaryKey: true }),
        plan: column.number(),
    },
});

// https://astro.build/db/config
export default defineDb({
    tables: { Users },
});
