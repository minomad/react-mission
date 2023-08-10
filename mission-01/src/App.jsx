import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="flex justify-center py-10 gap-4">
      <Button color="primary">로그인</Button>
      <Button color="secondary">회원가입</Button>
      <Button color="disabled">Disabled</Button>
    </div>
  );
}

export default App;
