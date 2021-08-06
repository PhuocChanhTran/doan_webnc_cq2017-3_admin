import React, { useContext } from "react";
import appContext from "../../appContext";
export default function Course(props) {
  const { store } = useContext(appContext);
  console.log('store.course iss');
  console.log(store.course)

  
  return (
    <div>
      <div className="page-wrapper">
            <div className="container-fluid">
              {/* ============================================================== */}
              {/* Start Page Content */}
              {/* ============================================================== */}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title mb-0">Static Table</h5>
                    </div>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">DoB</th>
                        </tr>
                      </thead>
                      <tbody>
                          {/* {store.learner.map((item)=>(
                             <tr>
                             <th scope="row">{item.user_id}</th>
                             <td>{item.user_name}</td>
                             <td>{item.user_email}</td>
                             <td>{item.user_dob}</td>
                           </tr>

                          ))}; */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              </div>
            </div>

            <footer className="footer text-center">
              All Rights Reserved by Matrix-admin. Designed and Developed by{" "}
              <a href="https://www.wrappixel.com">WrapPixel</a>.
            </footer>
          </div>
  );
}
