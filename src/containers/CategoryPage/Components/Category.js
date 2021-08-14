import React, { useContext } from "react";
import appContext from "../../appContext";
import { delUser } from "../../../services/app.service";

export default function Category(props) {
  const { store, dispatch } = useContext(appContext);
  // console.log(store.learner)
  const btnDel_Click = async function (user_id) {
    const res = await delUser(user_id);
    console.log('userid sau khi xoa la:');
    console.log(user_id);

    if (res.status === 200) {
      dispatch({
        type: "delLearner",
        payload: {
          user_id,
        }
      });
    }
  };

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
                      <th scope="col">CategoryName</th>
                      <th scope="col">Subject</th>
                    </tr>
                  </thead>
                  <tbody>
                    {store.category.map((item) => (
                      <tr>
                        {/* <th scope="row">{item.user_id}</th> */}
                        <th scope="row">{item.category_id}</th> 
                        <td>{item.category_name}</td>
                        <td>{item.subject_id}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-primary"
                            onClick={()=>btnDel_Click(item.user_id)}
                          >
                            <i class="fa fa-trash" aria-hidden="true"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
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
