import {Title, Text, Image, Container, Flex} from '@/shared/ui';

import { Divider, Kids } from '@/shared/assets'

export const Header = () => (
    <Container>
        <Flex direction="column" align={'center'} gap={20}>
            <Title as={"h1"} marginY={24} size={42}>У НАС <br/> СВАДЬБА</Title>
            <Text>приглашаем разделить этот <br/> особенный день вместе с нами</Text>
            <Image
                SvgComponent={Divider}
                width={350}
            />
            <Image
                src={Kids}
                maxWidth={'80%'}
            />
            <Title as="h2" size={32}>20.06.2026</Title>
        </Flex>
    </Container>
);