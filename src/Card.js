import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './card.css'

function Card({ narrator, text, textAr, hadithNum, book }) {
    const [copied, setCopied] = useState(false);

    function handleCopy() {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000); // reset copied state after 1 second
    }

    return (
        <div><div className="mainContainer">
            <div className=" card pa3 bw2 shadow-5 actualHadithContainer">
                <div className="hadithTextContainers">


                    <div className="englishcontainer">
                        <div className="hadith_narrated narrator pa1">{narrator}</div>
                        <div className="english_hadith_full">
                            <div className="lh-copy text_details"><p>{text}</p></div>
                            <div className="clear"></div>
                        </div>
                    </div>


                    <div className="arabic_hadith_full pb2 pb0-l">{textAr}</div>
                </div>


                <div className=" pt2 bottom-section">
                    <span onClick={() => window.open(`https://sunnah.com/bukhari:${hadithNum}`, '_blank')} className=" pl3 pb2 dim hadithNum">{book}: {hadithNum}</span>
                    <CopyToClipboard text={`${narrator}\n${text}\n${textAr}\n${book}: ${hadithNum}`} onCopy={handleCopy}>
                        <span className='f6 link dim ml3 ph3 pv1 mb2 dib copyClipboardBtn'>{copied ? 'Copied!' : 'Copy to clipboard'}</span>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Card