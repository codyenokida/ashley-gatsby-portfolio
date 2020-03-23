import React from 'react'

import styles from './ResumeButton.module.css'

const ResumeButton = ({ resumeLink }) => {
    return(
    <div className={styles.resumeButton}>
        <a href={resumeLink} download>
            RESUME
        </a>
    </div>
    )
}

export default ResumeButton