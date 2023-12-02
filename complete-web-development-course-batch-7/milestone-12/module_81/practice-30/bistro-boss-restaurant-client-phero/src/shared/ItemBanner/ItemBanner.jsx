const ItemBanner = ({ title, details, info, heading, para }) => {
    return (
        <div className={info}>
            <h3 className={heading}>{title}</h3>
            <p className={para}>{details}</p>
        </div>
    );
};

export default ItemBanner;