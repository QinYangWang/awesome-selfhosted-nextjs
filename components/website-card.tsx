import type { Website } from '@prisma/client' // Importing the Post type from the Prisma client library.
import Image from 'next/image'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from 'next/link'

interface WebsiteCardProps {
    website: Website
}
const WebsiteCard: React.FC<WebsiteCardProps> = ({ website }) => {
    return (
        <Card className="w-[500px]  shadow-lg" >
            <CardHeader >
                <AspectRatio ratio={16 / 9} className="h-full w-full" >
                    <Image src={website.cover} alt="Image" className="rounded-md object-cover" fill quality={100} />
                </AspectRatio>
            </CardHeader>
            <CardContent>
                <CardTitle> {website.name} </CardTitle>
                <CardDescription>{website.description}</CardDescription>
            </CardContent>
            <CardFooter>
                <Link href={website.url}></Link>
            </CardFooter>
        </Card>
    )
}

export default WebsiteCard;