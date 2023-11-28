import "./WriteView.css"
import { useState } from "react"

export default function WriteView() {
    

    return (
        <main role='write-view' className='view'>
            <textarea role='text-input' name="" id="" cols="30" rows="10"></textarea>
            <input role='username-input' type="text" placeholder="Användarnamn" />
            <button role='post-btn'>Publicera</button>
        </main>
    )
}