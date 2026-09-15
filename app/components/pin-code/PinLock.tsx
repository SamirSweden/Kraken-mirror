'use client';

import { useState } from 'react';

// Интерфейс для пропсов компонента
interface PinLockProps {
  onSuccesVerify?: () => void;
}

export default function PinLock({ onSuccesVerify }: PinLockProps) {
  const [pin, setPin] = useState<string[]>(['', '', '', '']);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  // Обработка нажатия на цифровую клавиатуру
  const handleNumberClick = (num: string): void => {
    if (loading) return;
    const nextIndex = pin.findIndex((digit) => digit === '');
    if (nextIndex !== -1) {
      const newPin = [...pin];
      newPin[nextIndex] = num;
      setPin(newPin);

      // Если ввели последнюю 4-ю цифру — автоматически отправляем на проверку
      if (nextIndex === 3) {
        verifyPinCode(newPin.join(''));
      }
    }
  };

  // Кнопка удаления (стереть цифру)
  const handleDelete = (): void => {
    if (loading) return;
    for (let i = pin.length - 1; i >= 0; i--) {
      if (pin[i] !== '') {
        const newPin = [...pin];
        newPin[i] = '';
        setPin(newPin);
        setError(false);
        setMessage('');
        break;
      }
    }
  };

  // Запрос на бэкенд (к FastAPI)
  const verifyPinCode = async (code: string): Promise<void> => {
    setLoading(true);
    try {
      const response = await fetch('https://api-for-the-crypto-app.vercel.app/api/verify-pin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: 'user_test_1', pin: code }),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setMessage('Доступ разрешен!');
        setError(false);
        setTimeout(() => {
          if (onSuccesVerify) onSuccesVerify();
        }, 300);
      } else {
        handleErrorState(result.detail || result.message || 'Неверный ПИН-код');
      }
    } catch (err) {
      handleErrorState('Ошибка соединения с сервером');
    } finally {
      setLoading(false);
    }
  };

  // Сброс и анимация ошибки при неверном пине
  const handleErrorState = (errorMsg: string): void => {
    setError(true);
    setMessage(errorMsg);
    setTimeout(() => {
      setPin(['', '', '', '']); // Сбрасываем поля
    }, 400); // Даем время отыграть анимацию тряски
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white select-none">
        <h1 className="text-3xl font-bold mb-4">SXGram</h1>
      <div className="w-full max-w-sm p-6 text-center">

        
        
        {/* Заголовок */}
        <h2 className="text-lg font-semibold mb-2">Write your own Pin Code</h2>
        <p className="text-slate-400 text-sm mb-8">use 4-digit code</p>

        {/* Точки индикаторы ввода */}
        <div className={`flex justify-center gap-4 mb-8 ${error ? 'animate-shake' : ''}`}>
          {pin.map((digit, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full transition-all duration-200 border-2 ${
                digit !== '' 
                  ? 'bg-blue-500 border-blue-500 scale-110' 
                  : 'border-slate-600 bg-transparent'
              }`}
            />
          ))}
        </div>

        {/* Сообщение об ошибке или успехе */}
        <div className="h-6 mb-4 text-sm font-medium">
          <span className={error ? 'text-red-400' : 'text-green-400'}>
            {message}
          </span>
        </div>

        {/* Цифровая клавиатура */}
        <div className="grid grid-cols-3 gap-4 max-w-[280px] mx-auto">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="w-16 h-16 rounded-full bg-[#111] shadow-[inset_4px_4px_150px_0_hsla(0,0%,100%,.15)] hover:bg-slate-700 active:bg-slate-600 text-2xl font-medium flex items-center justify-center transition-colors mx-auto "
            >
              {num}
            </button>
          ))}
          
          <div />

          <button
            onClick={() => handleNumberClick('0')}
            className="w-16 h-16 rounded-full bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-2xl font-medium flex items-center justify-center transition-colors mx-auto shadow-md"
          >
            0
          </button>

          <button
            onClick={handleDelete}
            className="w-16 h-16 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors mx-auto text-xl"
            title="Стереть"
          >
            ⌫
          </button>
        </div>

      </div>
    </div>
  );
}