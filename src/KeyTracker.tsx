import React from 'react'
import useKeyboard from './useKeyboard'

const KeyPressed: React.FC<{code: string}> = ({code}) => (
  <>
    You just pressed the&nbsp;
    <span style={{color: 'red'}}>{code === ' ' ? 'space' : code}</span>&nbsp;
    key.
  </>
)
const NothingPressed = () => <>You haven't pressed anything yet.</>

const KeyTracker = () => {
  const code: string | null = useKeyboard()
  return (
    <h2>{code ? <KeyPressed code={code} /> : <NothingPressed />}</h2>
  )
}

export default KeyTracker