import React from 'react'

const Message = () => {
  return (
    <div className='d-flex flex-column align-items-end mb-3'>
        <div className='d-flex align-items-center'>
        <div className='p-2 rounded text-white bg-primary me-3'>
              hello, whats up....
            </div>
            <div className='me-2'>
                <div className='rounded-circle bg-light d-flex justify-content-center align-items-center' style={{width: '30px', height: '30px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-square-dots" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                  </svg>
                </div>
            </div>
          
        </div>
        <div className='text-muted small mt-1 d-flex align-items-center gap-1 me-5 fw-bold'>
          10:00
        </div>
    </div>
  )
}

export default Message
