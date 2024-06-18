import React from "react";
import EditItem from "../Icons/EditItem";
import DeleteItem from "../Icons/DeleteItem";
import useFetch from "../../hooks/useFetch";
import FormModal from "../FormModal/FormModal";
import { Input } from "../Form/Input/Input";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../api/api";
import AddItem from "../Icons/AddItem";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const Table2 = ({ dataType, dataCategory }) => {
  const [category, setCategory] = React.useState([]);
  const [showFormModal, setShowFormModal] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [id, setId] = React.useState(null);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const { request } = useFetch();
  const [data, setData] = React.useState(null);
  const { schema, session } = React.useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema("")),
  });

  const handleEdit = ({ target }) => {
    setShowFormModal(true);
    setIsEditing(true);
    setId(Number(target.closest("tr").id));
  };
  const handleAdd = () => {
    setShowFormModal(true);
    setIsEditing(false);
    setId(null);
  };
  const handleDelete = ({ target }) => {
    setShowConfirmModal(true);
    setId(Number(target.closest("tr").id));
  };

  const handleConfirmDelete = async () => {
    const { url, options } = await Api.DeleteIncomePlanning(session, id);
    await request(url, options);
    setShowConfirmModal(false);
  };

  const onSubmit = async (data) => {
    if (dataType === "planning" && dataCategory === "income") {
      const date = new Date(data.month || data.date);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const formatedDate = `${year}-${month}-${day}`;
      const body = {
        ...data,
        category_id: Number(data.category_id),
        month: formatedDate,
      };

      if (!isEditing) {
        const { url, options } = await Api.CreateIncomePlanning(session, body);
        await request(url, options);
      } else {
        const { url, options } = await Api.UpdateIncomePlanning(
          session,
          body,
          id
        );
        await request(url, options);
      }
    } else if (dataType === "planning" && dataCategory === "expense") {
      const date = new Date(data.month || data.date);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const formatedDate = `${year}-${month}-${day}`;
      const body = {
        ...data,
        category_id: Number(data.category_id),
        month: formatedDate,
      };

      if (!isEditing) {
        const { url, options } = await Api.CreateExpensePlanning(session, body);
        await request(url, options);
      } else {
        const { url, options } = await Api.UpdateExpensePlanning(
          session,
          body,
          id
        );
        await request(url, options);
      }
    }

    setShowFormModal(false);
  };

  React.useEffect(() => {
    const getCategory = async () => {
      if (dataCategory === "income") {
        const { url, options } = Api.GetIncomeCategory(session);
        const { json } = await request(url, options);
        setCategory(json);
      } else if (dataCategory === "expense") {
        const { url, options } = Api.GetExpenseCategory(session);
        const { json } = await request(url, options);
        setCategory(json);
      }
    };
    getCategory();
  }, []);

  React.useEffect(() => {
    const getData = async () => {
      if (dataType === "planning" && dataCategory === "income") {
        const { url, options } = Api.GetIncomePlanning(session);
        const { json } = await request(url, options);
        setData(json);
      } else if (dataType === "planning" && dataCategory === "expense") {
        const { url, options } = Api.GetExpensePlanning(session);
        const { json } = await request(url, options);
        setData(json);
      }
    };
    getData();
  }, []);

  return (
    <>
      <FormModal
        title={(isEditing ? "Editar" : "Incluir") + " Planejamento"}
        onSubmit={handleSubmit(onSubmit)}
        show={showFormModal}
        onClose={() => setShowFormModal(false)}
        // initialData={currentData}
      >
        <fieldset>
          <label htmlFor="category_id">Categoria</label>
          <select {...register("category_id")} name="category_id">
            {category.map((category) => {
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
      <i onClick={handleAdd}>
        <AddItem />
      </i>
      <ConfirmModal
        onClose={() => setShowConfirmModal(false)}
        show={showConfirmModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default Table2;
