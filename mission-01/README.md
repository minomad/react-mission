# 과제-01

> Figma를 사용해 아토믹(atomic) 컴포넌트를 설계(design)한 후, 리액트 컴포넌트로 구현하기

## Figma

### [Figma-Link](https://www.figma.com/file/VtEftOUNlY2sgLO2DZa4tP/mission-01?type=design&node-id=0%3A1&mode=design&t=vuwixwLdgtUOobrn-1)

![Figma](https://github.com/minomad/react-mission/assets/131448929/73e7f8ef-c3d0-49ec-bec7-f65fb73404fc)

## components

### [Code-Link](https://github.com/minomad/react-mission/blob/main/mission-01/src/components/Button.jsx)

### Button.jsx

```jsx
function Button({ children, color, type = 'button' }) {
  let backgroundColor = '';

  if (color === 'primary') {
    backgroundColor = 'bg-primary';
  } else if (color === 'secondary') {
    backgroundColor = 'bg-secondary';
  } else if (color === 'disabled') {
    backgroundColor = 'bg-disabledColor';
  }

  const buttonStyle = `w-[200px] h-10 ${backgroundColor} text-white font-bold rounded-lg`;

  return (
    <button type={type} className={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
```

### App.jsx

```jsx
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center py-10 gap-4">
      <Button color="primary">로그인</Button>
      <Button color="secondary">회원가입</Button>
      <Button color="disabled">Disabled</Button>
    </div>
  );
}

export default App;
```

## 결과

![components](https://github.com/minomad/react-mission/assets/131448929/e4509af0-b86c-4b05-90e3-04fa39ff0805)
