import React from "react";
import PlanningFooter from "../Footer/PlanningFooter";
import AddItem from "../../../../components/Icons/AddItem";
import FormModal from "../../../../components/FormModal/FormModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../../../context/UserContext";
import { Input } from "../../../../components/Form/Input/Input";
import { Api } from "../../../../api/api";
import useFetch from "../../../../hooks/useFetch";
import Table from "../../../../components/Table/Table";

const Income = () => {
  const [incomeCategory, setIncomeCategory] = React.useState([]);
  const [showFormModal, setShowFormModal] = React.useState(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const [currentData, setCurrentData] = React.useState(null);
  const [isEditing, setIsEditing] = React.useState(false);
  const { schema, session } = React.useContext(UserContext);

  const { request } = useFetch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema("")),
  });
  const onSubmit = async (data) => {
    const date = new Date(data.month);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formatedDate = `${year}-${month}-${day}`;
    const body = {
      ...data,
      category_id: Number(data.category_id),
      month: formatedDate,
    };

    const { url, options } = await Api.CreateIncomePlanning(session, body);
    const { response, json } = await request(url, options);
    console.log(response);
  };

  const handleAdd = () => {
    setIsEditing(false);
    setCurrentData(null);
    setShowFormModal(true);
  };

  React.useEffect(() => {
    const getCategory = async () => {
      const { url, options } = Api.GetIncomeCategory(session);
      const { json } = await request(url, options);
      setIncomeCategory(json);
    };
    getCategory();
  }, []);

  return (
    <>
      <FormModal
        title={"Incluir Planejamento"}
        onSubmit={handleSubmit(onSubmit)}
        show={showFormModal}
        onClose={() => setShowFormModal(false)}
      >
        <fieldset>
          <label htmlFor="category">Categoria</label>
          <select {...register("category_id")} name="category">
            {incomeCategory.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.category_name}
                </option>
              );
            })}
          </select>
          <Input
            formType={"addEdit"}
            type={"month"}
            errors={errors.date?.message}
            register={register}
            placeholder={"month"}
            id={"month"}
            icon={""}
          />
          <Input
            formType={"addEdit"}
            type={"text"}
            errors={errors.planned_amount?.message}
            register={register}
            placeholder={"planned_amount"}
            id={"planned_amount"}
            icon={""}
          />
        </fieldset>
      </FormModal>
      <div className="planning">
        <header className="">
          <h2>Planned Incomes</h2>
          <form action=""></form>
          <i onClick={handleAdd}>
            <AddItem />
          </i>
        </header>
        <section>
          <Table apiMethod={Api.GetIncomePlanning(session)} />
          <PlanningFooter />
        </section>
      </div>
    </>
  );
};

export default Income;
