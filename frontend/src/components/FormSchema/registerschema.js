import z from "zod"

export const registerschema = z.object({
    email : z.string().email("Enter valid email"),
    pass : z.string().min(8,"password must contain 8 characters"),
})


