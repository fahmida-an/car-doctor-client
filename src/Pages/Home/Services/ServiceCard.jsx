import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id, service_id, title, img, price, description} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500">Price: ${price}</p>
        <div className="card-actions">
         <Link to={`/checkout/${_id}`}> <button className="btn btn-primary">See details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
