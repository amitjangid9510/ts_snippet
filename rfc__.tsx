import React, { useState, ReactNode } from 'react';

// 1. Typing Function Component Props
interface GreetingProps {
  name: string;
  age?: number;  // optional prop
}
const Greeting: React.FC<GreetingProps> = ({ name, age }) => (
  <div>
    <h1>Hello, {name}!</h1>
    {age && <p>Your age is {age}</p>}
  </div>
);

// 2. Typing State and Hooks
const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// 3. Typing Event Handlers
const NameInput: React.FC = () => {
  const [name, setName] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return <input type="text" value={name} onChange={handleChange} />;
};

// 4. Typing Props with Children
interface ContainerProps {
  children: ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="container">{children}</div>
);

// 5. Typing API Data and Objects
interface User {
  id: number;
  name: string;
  email: string;
}
const fetchUser = async (): Promise<User> => {
  const response = await fetch('https://api.example.com/user/1');
  return response.json();
};

