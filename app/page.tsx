'use client'

import Profile from "@/app/components/Profile";
import Header from "@/app/components/shared/header/Header";
import { useState, useEffect } from "react";
import PinLock from "./components/pin-code/PinLock";
import CreatePin from "./components/pin-code/CreatePin";

export default function Home() {
    const [step, setStep] = useState<'loading' | 'create' | 'verify' | 'app'>('loading');

    // При старте проверяем, есть ли уже пин-код у пользователя
    useEffect(() => {
        async function checkPinExists() {
            try {
                // Можно сделать эндпоинт на бэкенде, например /api/check-pin?user_id=user_test_1
                // Либо для теста пока просто переключать:
                // Если юзер уже создавал — переводим на 'verify', если нет — на 'create'
                setStep('create'); // Пока ставим создание для теста
            } catch (err) {
                setStep('create');
            }
        }
        checkPinExists();
    }, []);

    if (step === 'loading') {
        return <div className="bg-black min-h-screen text-white flex items-center justify-center">Загрузка...</div>;
    }

    // Шаг 1: Создание пина
    if (step === 'create') {
        return <CreatePin onSuccess={() => setStep('verify')} />;
    }

    // Шаг 2: Проверка пина (когда он уже создан)
    if (step === 'verify') {
        return <PinLock onSuccesVerify={() => setStep('app')} />;
    }

    // Шаг 3: Главное приложение (после успешного входа)
    return (
        <main className={'bg-black min-h-screen'}>
            <Header />
            <Profile />
        </main>
    );
}

