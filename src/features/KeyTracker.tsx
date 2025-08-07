import React from 'react'
import useKeyboard from '../hooks/useKeyboard'

const KeyPressed: React.FC<{code: string}> = ({code}) => {
  const codeName = code === ' ' ? 'space' : code;
  return (
    <>
      <span>You just pressed the</span>&nbsp;
      <span style={{color: 'red'}}>{codeName}</span>&nbsp;
      <span>key.</span>
    </>
  )
}

const NothingPressed = () => <>You haven't pressed anything yet.</>

const KeyTracker = () => {
  const code: string | null = useKeyboard()
  return (
    <h2>{code ? <KeyPressed code={code} /> : <NothingPressed />}</h2>
  )
}

export default KeyTracker