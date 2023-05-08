'use client';

import Container from '@/components/Container';
import Header from '@/components/Header';
import MyMenu from '@/components/MyMenu';

export default function Example() {
    return (
        <>
            <div className="min-h-full">
                <MyMenu/>
                <Header description={"Dashboard"}/>
                <Container>
                    
                </Container>
            </div>
        </>
    )
}
