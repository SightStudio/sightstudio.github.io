import React, {useEffect, useRef, useState} from 'react'

const UtterancesComment = () => {

    const divRef = useRef<HTMLInputElement>(null);
    const [loadStatus, setLoadStatus] = useState<string>('pending');

    useEffect(() => {
        const scriptEl = document.createElement('script')
        scriptEl.onload = () => setLoadStatus('success')
        scriptEl.onerror = () => setLoadStatus('failed')
        scriptEl.async = true
        scriptEl.src = 'https://utteranc.es/client.js'
        scriptEl.setAttribute('repo', 'SightStudio/blog-comment')
        scriptEl.setAttribute('issue-term', 'title')
        scriptEl.setAttribute('theme', 'github-light')
        scriptEl.setAttribute('crossorigin', 'anonymous')
        divRef.current?.appendChild(scriptEl)
    }, []);

    return (
        <div className="comments-wrapper">
            {loadStatus === 'failed' && <div>Error. Please try again.</div>}
            {loadStatus === 'pending' && <div>Loading script...</div>}
            <div ref={divRef} />
        </div>
    )
}

export default UtterancesComment
