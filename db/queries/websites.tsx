import type { Website } from '@prisma/client' // Importing the Post type from the Prisma client library.
import { db } from '@/db'
import { notFound } from 'next/navigation' // Importing the notFound function from Next.js for handling 404 errors.

export async function fetchWebsites(): Promise<Website[]> {  // Function to fetch all posts from the database.
    return await db.website.findMany()
}

export async function fetchWebsiteById(id: number): Promise<Website | null> { // Function to fetch a single post by its ID.
    const project = await db.website.findFirst({
        where: {
            id
        }
    })

    if (!project) {
        notFound() // If the post is not found, a 404 error is thrown.
    }

    return project
}