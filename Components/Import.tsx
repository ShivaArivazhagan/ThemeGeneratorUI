import React from 'react'
import './Import.css'
const Import = () => {
    return (
        <div>
            <div className="image-upload">
                <button >Import</button>
                <input id="file-input" type="file" />
            </div>
        </div>
    )
}

export default Import