import z from "zod"

export const registerschema = z.object({
    name : z.string().min(3,"name must contain 3 letters"),
    email : z.string().email("Enter valid email"),
    pass : z.string().min(8,"password must contain 8 characters"),
    age : z.coerce.number().min(18,"Age must be 18")
})


