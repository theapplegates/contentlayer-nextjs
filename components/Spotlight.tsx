import { SpotlightProvider } from '@mantine/spotlight';
import { Post } from 'contentlayer/generated';
import { ReactNode } from 'react';
import { useRouter } from 'next/router'

type Props = {
    children: ReactNode,
    data: Post[]
}

const Spotlight = ({ children, data }: Props) => {
    // console.log('data', data);

    const router = useRouter()

    return (
        <SpotlightProvider
            actions={
                data.map(post => ({
                    id: post._id,
                    title: `đ ${post.title}`,
                    description: post.description,
                    onTrigger: () => router.push(post.url),
                    new: false,
                }))
            }
            searchPlaceholder="đĒļ Search for posts..."
            nothingFoundMessage="đ¤ Nothing found..."
            shortcut="mod + S"
            limit={5}
        >
            {children}
        </SpotlightProvider>
    );
}

export default Spotlight