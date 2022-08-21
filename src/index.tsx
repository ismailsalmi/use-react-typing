import React from "react";
import {useEffect, useState} from "react";
interface ParamsType{
  delay: number;
  late: number;
  locale: "ar" | "en";
}
function useTyping(options: ParamsType) {
    const {delay, late, locale} = options;
    const [text, setText] = useState<string[] | string>([]);
    const inDevelopement = process.env.NODE_ENV === "development" ? true : false;
    const printLogs = (enviroment : boolean, value: number | string) => {
        if (enviroment) {
            console.log(value);
        }
    }
    function setString(welcome = "Please pass your text.") {
        const len = welcome.length;
        const firstNumber = Number.parseInt(String(late || 8000)[0]);
        const later = (len + firstNumber);
        const [increment, setIncrementCount] = useState(0);
        const [decrement, setDecrementCount] = useState(len);
        useEffect(() => {
            const interval = setInterval(() => {
                if (increment < later && increment !== later) {
                    setIncrementCount(prevCount => prevCount + 1);
                    setText((prev) => [
                        ...prev,
                        welcome[increment]
                    ]);
                    printLogs(inDevelopement, increment);
                } else if (increment === later && decrement !== -8) {
                    setText("");
                    setDecrementCount(prevCount => prevCount - 1);
                    setText(welcome.substring(0, decrement));
                    printLogs(inDevelopement, decrement);
                } else {
                    setDecrementCount(len);
                    setIncrementCount(0);
                }

            }, delay || 150);
            return() => clearInterval(interval);
        }, [increment, decrement]);
    }
    const string = () => {
        return (<p dir={
            locale === "ar" ? "rtl" : "ltr"
        }> {text}</p>);
    };
    return [string(), setString];
}
export {
    useTyping
};
