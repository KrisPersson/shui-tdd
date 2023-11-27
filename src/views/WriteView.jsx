import "./WriteView.css"
import { useState } from "react"

export default function WriteView() {
    

    return (
        <main className='view'>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <input type="text" placeholder="Användarnamn" />
            <button>Publicera</button>
        </main>
    )
}