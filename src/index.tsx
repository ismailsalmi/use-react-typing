/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useEffect, useState } from "react";

export declare interface ParamsType {
    delay?: number;
    late?: number;
    locale?: "ar" | "en" | "es";
};

export declare type TextType = string | string[];

function useTyping(props?: ParamsType) {
    const delay = props?.delay || 100;
    const late = props?.late || 1000;
    const locale = props?.locale || "en"
    const [text, setText] = useState<TextType>([]);
    const setString = (str: string = "Please set your text.") => {
        const len = str.length;
        const firstNumber = Number.parseInt(String(late)[0]);
        const later = (len + firstNumber);
        const [increment, setIncrementCount] = useState<number>(0);
        const [decrement, setDecrementCount] = useState<number>(len);
        useEffect(() => {
            const interval = setInterval(function () {
                if (increment < later && increment !== later) {
                    setIncrementCount((prevCount) => prevCount + 1);
                    setText((prev) => [...prev, str[increment]]);
                } else if (increment === later && decrement !== -8) {
                    setText("");
                    setDecrementCount(prevCount => prevCount - 1);
                    setText(str.substring(0, decrement));
                } else {
                    setDecrementCount(len);
                    setIncrementCount(0);
                }
            }, delay);
            return () => clearInterval(interval);
        }, [decrement, increment, later, len, str]);
    }

    const string = ((): React.ReactNode => (
        <p dir={locale === "ar" ? "rtl" : "ltr"}>{text}</p>
    ))();
    return { string, setString };
}
export {
    useTyping
};
