import {Container, Title, Text, Flex} from "@/shared";

export const Wishes = () => {
    return (
        <Container marginY={16} paddingX={28} >
            <Flex gap={10}>
                <Title as={'h1'} marginY={16} size={36}>ПОЖЕЛАНИЯ</Title>
                <Text weight={500} size={20}>
                    Для нас самое важное - разделить этот день с вами.
                </Text>
                <Text>
                    Пожалуйста, не приносите цветы и традиционные подарки: цветы быстро увянут, а бытовые вещи могут просто не пригодиться.
                </Text>
                <Text>
                    Если вы захотите сделать нам подарок, мы с благодарностью примем конверт — он поможет нам приблизить запланированное путешествие.
                </Text>
            </Flex>
        </Container>
    );
};
