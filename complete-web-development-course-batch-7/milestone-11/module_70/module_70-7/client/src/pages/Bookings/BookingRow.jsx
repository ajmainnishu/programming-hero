const BookingRow = ({ booking }) => {
    const { email, service, price, img } = booking;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="photo" />}
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{email}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;