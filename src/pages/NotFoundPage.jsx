import { useState } from 'react'
import Logo from "@/components/Logo";


function NotFoundPage() {
    return (
        <div className="row">
            <div className="col-12 max-w-xl mx-auto">
                <Logo/>
                
                <h3>404 Not Found</h3>
            </div>
        </div>
    )
}

export default NotFoundPage
