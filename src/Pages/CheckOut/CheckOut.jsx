import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const {title, _id, price, img} = service;
    const {user} = useContext(AuthContext)

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title, 
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings',{
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Service book successfully')
            }
        })
    }
    return (
        <div>
            <h2 className="text-center text-3xl">Book Services: {title}</h2>

            <form onSubmit={handleBookService} className="card-body">
         <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
         <div className="form-control">
                <label className="label">
                  <span className="label-text text-dark2 font-bold text-sm lg:text-xl">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  className="input input-bordered "
                  required
                />
              </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text text-dark2 font-bold text-sm lg:text-xl">Email</span>
               </label>
               <input
                 type="email"
                 name="email"
                defaultValue={user?.email}
                 className="input input-bordered "
                 required
               />
             </div>
             <div className="form-control">
                <label className="label">
                  <span className="label-text text-dark2 font-bold text-sm lg:text-xl">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="input input-bordered "
                  required
                />
              </div>
             <div className="form-control">
               <label className="label">
                 <span className="label-text text-dark2 font-bold text-sm lg:text-xl">Due Amount</span>
               </label>
               <input
                 type="text"
                 defaultValue={'$' +price}
                 className="input input-bordered "
                 required
               />
             </div>
         </div>
         
          
             <div className="form-control mt-3">
               <input className="btn bg-orange-500 btn-white font-bold" type="submit" value={'Order Confirm'} />
             </div>
           </form>
        </div>
    );
};

export default CheckOut;