import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1 className="text-center">Contact page</h1><hr />
                <div className="row">
                    <div className="col col-md-6">
                        <p className="text-left">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book.</p><p> It has survived
                        not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. </p>

                        <p><span className="contactlistview">Name:</span> Ashish Kumar</p>
                        <p><span className="contactlistview">UserName:</span> Ashish0507</p>
                        <p><span className="contactlistview">Email:</span>ashish@gmail.com</p>
                        <p><span className="contactlistview">Mobile No:</span>8709632680</p>
                        <p><span className="contactlistview">Website:</span>ashishkumar.com</p>

                    </div>
                    <div className="col col-md-6">
                        <div>
                        <form class="form mt-2" >
                           <input type="text" class="form-control p-4 " placeholder="Enter Fullname"  />
                            <input type="email" class="form-control my-3 p-4" placeholder="Enter email"  />
                               
                           <input type="number" class="form-control p-4" placeholder="Enter Mobile No"  />
                           <textarea class="form-control my-3"  rows="4"></textarea>      
                            <button type="submit" class="btn btn-primary  btn-block">Submit</button>
                         </form>
                        </div>
                        
                    </div>         
                    </div>
                 </div>
             </div>
    )
}
export default Contact;