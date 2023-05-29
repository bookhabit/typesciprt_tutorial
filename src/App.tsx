import './App.css'
import Counter from './components/Counter'
import Heading from './components/Heading'
import List from './components/List';
import { Section } from './components/Section'
import { useState } from 'react';

function App() {
  const [count,setCount] = useState<number>(1)
  return (
    <>
      <Heading title={'hello2'}/>
      <Section title='이현진'>        
          This is my section
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={['이현진','김상원','이성범']} render={(item:string)=>'username '+item}/>
    </>
  )
}

export default App
