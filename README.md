## React hook to type your text with animation 

Built to be used with `create-react-app`, `nextjs`, `gatsby`, or `react-static`.

[See it in demo](https://ismailsalmi.net/hooks/useTyping)

### import and how to use

```
import {useTyping} from "use-react-typing";

export default Home = () => {
    const [text, setText] = useTyping({ delay: 50, late: 1000, locale: "en"});
    setText("Welcome to our restarant ✌.");
    return (
          <div>
            {text}
          </div>
    );
};
```

