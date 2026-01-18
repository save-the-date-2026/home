import {Container, Flex, Text, Title} from "@/shared";

export const EventTime = () => {
    return (
        <Container marginY={24}>
            <Flex gap={20}>
                <Title as={"h1"} size={36}>ВРЕМЯ НАЧАЛА</Title>
                <Title as={"h2"} size={28}>15:00</Title>
                <Text>
                    Просим вас прибыть немного заранее, чтобы <br/>
                    спокойно занять свои места и насладиться <br/>
                    атмосферой праздника.
                </Text>
            </Flex>
        </Container>
    );
};

