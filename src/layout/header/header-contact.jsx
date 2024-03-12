import React from 'react'
import { Contact } from '../../imgs-icon/icons/contact'

export const HeaderContact = () => {
  return (
    <div>
        <button className="flex flex-col items-center ">
              <Contact/>
              <p className="text-black ">Войти</p>
            </button>
    </div>
  )
}
