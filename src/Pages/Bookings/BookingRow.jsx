const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, customerName, service, email, date, price, name, status } = booking;


  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn  btn-sm btn-square bg-red-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {img && <img src={img} alt="" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{booking.customerName}</div>
            <div className="text-sm opacity-50">{booking.email}</div>
          </div>
        </div>
      </td>
      <td>{booking.service}</td>

      <td>${booking.price}</td>
      <td>{booking.date}</td>
      <th>
        { status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
          <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
        }
      </th>
    </tr>
  );
};

export default BookingRow;
