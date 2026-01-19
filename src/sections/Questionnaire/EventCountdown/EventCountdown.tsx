import { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import {Flex, Title, Text} from "@/shared";

const EVENT_TIME = moment.tz('2026-06-20 15:00', 'Asia/Omsk');

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
};

export const EventCountdown = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    // Получаем точное текущее время с внешнего сервера
    const fetchCurrentTime = async () => {
        const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Omsk');
        const data = await res.json();
        return moment.tz(data.datetime, 'Asia/Omsk');
    };

    const calculate = async () => {
        const now = await fetchCurrentTime();
        const diff = moment.duration(EVENT_TIME.diff(now));

        if (diff.asMilliseconds() <= 0) {
            setTimeLeft({ days: 0, hours: 0, minutes: 0 });
            return;
        }

        setTimeLeft({
            days: Math.floor(diff.asDays()),
            hours: diff.hours(),
            minutes: diff.minutes()
        });
    };

    useEffect(() => {
        calculate();
        const interval = setInterval(calculate, 60_000);
        return () => clearInterval(interval);
    }, []);

    if (!timeLeft) return null;

    return (
        <Flex align={'center'} gap={20}>
            <Title as={"h1"} size={36}>До свадьбы осталось</Title>
            <Flex align={'flex-start'}>
                <Flex direction={'row'} gap={10} align={'center'}>
                    <Text size={20}>Дней:</Text>
                    <Text size={24} weight={700}>{timeLeft.days}</Text>
                </Flex>

                <Flex direction={'row'} gap={10} align={'center'}>
                    <Text size={20}>Часов:</Text>
                    <Text size={24} weight={700}>{timeLeft.hours}</Text>
                </Flex>

                <Flex direction={'row'} gap={10} align={'center'}>
                    <Text size={20}>Минут:</Text>
                    <Text size={24} weight={700}>{timeLeft.minutes}</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
