import React, { FC } from 'react';

interface MessagesIconProps {
    isOpen: boolean;
}

const MessagesIcon: FC<MessagesIconProps> = ({ isOpen }) => {
    return (
        <div className='h-full mx-3'>
            {isOpen ? (
               <svg
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 64 64"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current text-white h-7 w-7"
                >
                    <g>
                        <path d="M57,15.81a.2.2,0,0,0,0-.07,1,1,0,0,0-.15-.31,0,0,0,0,0,0,0l0,0a1,1,0,0,0-.21-.2l-.07,0,0,0-24-12a1,1,0,0,0-.9,0l-24,12,0,0-.06,0a.85.85,0,0,0-.22.2l0,0a0,0,0,0,0,0,0,1,1,0,0,0-.15.31.2.2,0,0,0,0,.07A.58.58,0,0,0,7,16V48a1,1,0,0,0,1,1H56a1,1,0,0,0,1-1V16A.58.58,0,0,0,57,15.81ZM32,5.12,54.11,16.17,32,32.75,9.89,16.17ZM9,47V18L31.4,34.8a1,1,0,0,0,1.2,0L55,18V47Z" />
                    </g>
                </svg>
            ) : (
                <svg
                id="Layer_1"
                version="1.1"
                viewBox="0 0 64 64"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-white h-7 w-7"
              >
                <g>
                  <path d="M57,16h0v0a.84.84,0,0,0,0-.27s0,0,0,0l-.06-.11a.5.5,0,0,0-.13-.19.26.26,0,0,0-.09-.09.85.85,0,0,0-.19-.14l-.11,0A1,1,0,0,0,56,15H8a1,1,0,0,0-.35.07l-.11,0a.85.85,0,0,0-.19.14.38.38,0,0,0-.09.09.59.59,0,0,0-.13.19l-.06.11s0,0,0,0A.84.84,0,0,0,7,16v0H7V48a1,1,0,0,0,1,1H56a1,1,0,0,0,1-1V16Zm-4.14,1L32,31.77,11.14,17ZM9,47V17.93L31.42,33.82a1,1,0,0,0,1.16,0L55,17.93V47Z" />
                </g>
              </svg>
        
            )}


        </div>
    );
};

export default MessagesIcon;
