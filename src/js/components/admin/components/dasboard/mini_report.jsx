import React from 'react';
 const MiniReport = () => {
    return (
        
        <div className="minireport_container_main">
            <div className="minireport_inner_container">
                <div className="minireport_data">
                    <p className="minireport_text"> Orders are ready to fulfill</p>
                </div>
                <div className="MuiTableCell-root">
                    <svg
                        className="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        role="presentation"
                    >
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>{" "}
                </div>
            </div>
            <hr className="MuiDivider-root" />
            <div className="minireport_inner_container">
                <div className="minireport_data">
                    <p className="minireport_text">274 payments to capture</p>
                </div>
                <div className="MuiTableCell-root">
                    <svg
                        className="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        role="presentation"
                    >
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>{" "}
                </div>
            </div>
            <hr className="MuiDivider-root" />

            <div className="minireport_inner_container">
                <div className="minireport_data">
                    <p className="minireport_text">No products out of stock</p>
                </div>
                <div className="MuiTableCell-root">
                    <svg
                        className="MuiSvgIcon-root"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        role="presentation"
                    >
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}; export default MiniReport;