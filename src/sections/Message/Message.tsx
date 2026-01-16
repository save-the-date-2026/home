import {Title, Text, Container, Flex} from '@/shared/ui';
import {Calendar} from "@/widget/Calendar";

export const Message = () => {
    return(
        <Container>
            <Flex>
                <Title as={'h1'} marginY={32} size={36}>Родные и любимые!</Title>
                <Text>
                    Мы рады пригласить вас на день, который <br/>
                    станет началом новой главы нашей жизни. <br/>
                    Пусть этот вечер будет наполнен радостью, <br/>
                    улыбками и атмосферой любви. <br/>
                    Будем счастливы видеть вас рядом!
                </Text>
                <Text weight={700} marginY={24}>
                    С теплом и любовью,<br/>
                    Катя и Вова
                </Text>
                <Calendar/>
            </Flex>
        </Container>
    )
}