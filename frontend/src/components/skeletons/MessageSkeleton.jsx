const MessageSkeleton = () => {
    return (
        <>
            {/* Left-aligned message skeleton */}
            <div className="d-flex align-items-center mb-2">
                <div className="placeholder-glow me-2">
                    <span className="placeholder rounded-circle" style={{ width: "40px", height: "40px", display: "inline-block" }}></span>
                </div>
                <div className="d-flex flex-column">
                    <span className="placeholder col-6 mb-1" style={{ height: "16px" }}></span>
                    <span className="placeholder col-6" style={{ height: "16px" }}></span>
                </div>
            </div>

            {/* Right-aligned message skeleton */}
            <div className="d-flex align-items-center justify-content-end">
                <div className="d-flex flex-column me-2">
                    <span className="placeholder col-6 mb-1" style={{ height: "16px" }}></span>
                </div>
                <div className="placeholder-glow">
                    <span className="placeholder rounded-circle" style={{ width: "40px", height: "40px", display: "inline-block" }}></span>
                </div>
            </div>
        </>
    );
};

export default MessageSkeleton;
