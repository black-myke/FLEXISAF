import React from 'react'

const InputArea = ({ input, handleInput }) => {
  return (
    <div className='input-area'>
            <input
                className='title-input'
                type='text'
                name='title'
                value={input.title}         
                onChange={handleInput}      
                placeholder='Your Title here'
            />
            <textarea
                className='content-input'
                type='text'
                name='content'
                value={input.content}       
                onChange={handleInput}      
                placeholder='Type your journal here...'
                rows='3'
            />
        </div>
  )
}

export default InputArea