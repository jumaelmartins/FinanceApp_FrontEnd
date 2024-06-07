import React from "react";
import EditItem from "../Icons/EditItem";
import DeleteItem from "../Icons/DeleteItem";
import useFetch from "../../hooks/useFetch";

const Table = ({ apiMethod }) => {
  const { request } = useFetch();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const GetIncomePlanning = async () => {
      const { url, options } = apiMethod;
      const { json } = await request(url, options);
      setData(json);
    };
    GetIncomePlanning();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Category</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((data) => {
            return (
              <tr key={data.id}>
                <td>Income</td>
                <td>{data.category.category_name}</td>
                <td>{data.date || data.month}</td>
                <td>R$ {data.amount || data.planned_amount}</td>
                <td>
                  <button type="button">
                    <i>
                      <EditItem />
                    </i>
                  </button>
                  <button type="button">
                    <i>
                      <DeleteItem />
                    </i>
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
