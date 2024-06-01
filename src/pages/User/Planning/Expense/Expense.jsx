import React from "react";
import PlanningFooter from "../Footer/PlanningFooter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../../../../components/Form/Input/Input";
import Search from "../../../../components/Icons/Search";
import AddItem from "../../../../components/Icons/AddItem";
import EditItem from "../../../../components/Icons/EditItem";
import DeleteItem from "../../../../components/Icons/DeleteItem";

const Expense = () => {
  const schema = yup
    .object({
      search: yup.string(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(data.search);
  };

  return (
    <div className="planning">
      <header className="">
        <h2>Planned Expenses</h2>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <Input
            errors={errors.password?.message}
            id={"search"}
            register={register}
            placeholder={"search"}
            type={"search"}
            icon={<Search />}
            modifier={" ipnt--search"}
          />
        </form>
        <i>
          <AddItem />
        </i>
      </header>
      <section>
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
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <tr key={i}>
                  <td>Expense</td>
                  <td>Wage</td>
                  <td>1{i}-08-2024</td>
                  <td>R$30{i}</td>
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
        <PlanningFooter />
      </section>
    </div>
  );
};

export default Expense;
