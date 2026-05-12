import {
  useEffect,
  useState
} from "react";

import axios from "axios";

import "../css/viewenquiry.css";

export default function ViewEnquiry() {

  const [enquiries, setEnquiries] = useState([]);

  const fetchEnquiries = async () => {

    try {

      const res = await axios.get(

        "http://localhost:8080/enquiry"
      );
      console.log(res)

      setEnquiries(res.data.data);

    } catch (err) {

      console.log(err);
    }
  };

  useEffect(() => {

    fetchEnquiries();

  }, []);

  return (

    <div className="view-enquiry-container">

      <h1>
        Admission Enquiries
      </h1>

      <div className="table-wrapper">

        <table>

          <thead>

            <tr>

              <th>Name</th>

              <th>Phone</th>

              <th>Category</th>

              <th>Enquiry</th>

              <th>Date</th>

            </tr>

          </thead>

          <tbody>

            {enquiries.map((item) => (

              <tr key={item._id}>

                <td>
                  {item.name}
                </td>

                <td>
                  {item.phone}
                </td>

                <td>
                  {item.category}
                </td>

                <td>
                  {item.enquiry}
                </td>

                <td>
                  {
                    new Date(
                      item.createdAt
                    ).toLocaleDateString()
                  }
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}