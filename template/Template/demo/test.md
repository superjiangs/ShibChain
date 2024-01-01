

---

order: 2

```jsx
import Template from '@/components/Template';

ReactDOM.render(
  <Template
    optionalString=""
    optionalNumber={1}
    optionalObject={{}}
    optionalSymbol={Symbol(2)}
    optionalArray={[]}
    optionalBool={false}
    optionalFunc={() => {
      console.log(1);
    }}
    optionalMulti={1}
    optionalNode={0}
  />,
  mountNode,
);
```
