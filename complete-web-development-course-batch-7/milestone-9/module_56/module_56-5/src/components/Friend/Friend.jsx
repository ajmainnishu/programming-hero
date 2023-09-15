const Friend = ({ring}) => {
    return (
        <div>
            <h2>Friend</h2>
            {ring && <p><small>Ring: Golden</small></p>}
        </div>
    );
};

export default Friend;