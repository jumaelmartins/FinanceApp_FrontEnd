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
import { Modal } from "../../../../components/Modal/Modal";

const Income = () => {
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
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Modal show={showModal} onClose={closeModal}>
        <h2>Incluir Planehamento</h2>
        <form>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
      </Modal>
      <div className="planning">
        <header className="">
          <h2>Planned Incomes</h2>
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
          <i onClick={openModal}>
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
                    <td>Income</td>
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
    </>
  );
};

export default Income;
