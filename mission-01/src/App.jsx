import Button from './components/Button';

function App() {
  return (
    <div className="flex flex-col items-center py-10 gap-4">
      <Button type='submit' color="primary">로그인</Button>
      <Button type='submit' color="secondary">회원가입</Button>
      <Button type='button' color="disabled">Disabled</Button>
    </div>
  );
}

export default App;
